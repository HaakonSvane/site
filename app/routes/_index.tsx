import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane" },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

export default function Index() {
    return (
        <Container className="flex flex-1 justify-center flex-col gap-4 max-w-lg">
            <Typography.Serif className="text-5xl font-bold">Welcome</Typography.Serif>
            <Typography.Sans>
                This is the website of Haakon Hafsahl Svane. It is both a blog and a project
                showcase. Feel free to navigate around and see if there is anything that interests
                you.
            </Typography.Sans>
        </Container>
    );
}
