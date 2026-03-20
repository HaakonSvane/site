import { useRouteError } from "react-router";
import { isJsonErrorResponse } from "~/lib/utility/errorResponse";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const PostErrorBoundary = () => {
    const error = useRouteError();
    let errorTitle: string;
    let errorDescription: string | undefined;
    if (isJsonErrorResponse(error)) {
        errorTitle = error.data.message;
        errorDescription = error.data.details;
        if (error.data.error?.message) {
            errorDescription += `\n: ${error.data.error.message}`;
        }
    } else {
        errorTitle = "An error occurred";
        errorDescription = "An unexpected error occurred";
    }
    return (
        <Container className="flex h-full gap-x-4 flex-row justify-center align-center">
            <div className="flex flex-col justify-center">
                <Typography.Serif className="text-6xl font-bold whitespace-nowrap">
                    {":("}
                </Typography.Serif>
            </div>
            <div className="flex flex-col gap-2 justify-center">
                <Typography.Serif className="text-3xl font-bold">{errorTitle}</Typography.Serif>
                <Typography.Sans>{errorDescription}</Typography.Sans>
            </div>
            <div className="flex flex-col justify-center whitespace-nowrap">
                <Typography.Serif className="text-6xl font-bold">{"):"}</Typography.Serif>
            </div>
        </Container>
    );
};
