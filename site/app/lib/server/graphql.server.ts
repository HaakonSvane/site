import { json } from "@remix-run/node";
import { ArgumentNode, Kind } from "graphql";
import {
    AnyVariables,
    Client,
    DocumentInput,
    OperationContext,
    cacheExchange,
    fetchExchange,
} from "urql";
import { JsonErrorResponsePayload } from "../utility/errorResponse";

const client = new Client({
    url: process.env.CONTENTFUL_GQL_URL!,
    exchanges: [cacheExchange, fetchExchange],
    fetchOptions: () => {
        return {
            headers: { authorization: `Bearer ${process.env.CONTENTFUL_API_KEY}` },
        };
    },
});

const injectPreviewArguments = <Data = unknown, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>,
) => {
    if (typeof query === "object") {
        const previewQueryArgumentNode: ArgumentNode = {
            kind: Kind.ARGUMENT,
            name: {
                kind: Kind.NAME,
                value: "preview",
            },
            value: {
                kind: Kind.BOOLEAN,
                value: true,
            },
        };
        for (const definition of query.definitions) {
            if (!("operation" in definition)) continue;
            for (const selection of definition.selectionSet.selections) {
                if (selection.kind !== Kind.FIELD) continue;
                const newSelection = {
                    ...selection,
                    arguments: [...(selection.arguments ?? []), previewQueryArgumentNode],
                };
                Object.assign(selection, newSelection);
            }
        }
    }
};

export const qlQuery = async <Data = unknown, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>,
    variables: Variables,
    context?: Partial<OperationContext>,
) => {
    if (process.env.ENV === "dev") injectPreviewArguments(query);
    const response = await client.query(query, variables, context);

    if (response.error?.networkError) {
        throw json<JsonErrorResponsePayload>({
            message: response.error.networkError.message,
            details: response.error.networkError.stack,
        });
    }
    return response;
};
