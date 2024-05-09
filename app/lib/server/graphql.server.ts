import { json } from "@remix-run/node";
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

export const qlQuery = async <Data = unknown, Variables extends AnyVariables = AnyVariables>(
    query: DocumentInput<Data, Variables>,
    variables: Variables,
    context?: Partial<OperationContext>,
) => {
    const response = await client.query(query, variables, context);
    if (response.error?.networkError) {
        throw json<JsonErrorResponsePayload>({
            message: response.error.networkError.message,
            details: response.error.networkError.stack,
        });
    }
    return response;
};
