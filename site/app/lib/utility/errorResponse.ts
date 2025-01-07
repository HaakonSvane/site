import { ErrorResponse, isRouteErrorResponse } from "react-router";

export type JsonErrorResponsePayload = {
    message: string;
    details?: string;
    error?: Error;
};

type JsonErrorResponse = Omit<ErrorResponse, "data"> & {
    data: JsonErrorResponsePayload;
};

export const isJsonErrorResponse = (value: unknown): value is JsonErrorResponse => {
    return (
        isRouteErrorResponse(value) &&
        "message" in value.data &&
        typeof value.data.message === "string"
    );
};
