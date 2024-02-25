import type { MetaFunction } from "@remix-run/node";
import { Typography } from "~/ui/Typography";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane" },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

export default function Index() {
    return (
        <div className="flex grow justify-center">
            <div className="flex justify-center flex-col gap-4 max-w-lg">
                <Typography.Heading className="text-5xl font-bold">Welcome</Typography.Heading>
                <Typography.Paragraph>
                    This is the website of Haakon Hafsahl Svane. It is both a blog and a project
                    showcase. Feel free to navigate around and see if there is anything that
                    interests you.
                </Typography.Paragraph>
            </div>
        </div>
    );
}
