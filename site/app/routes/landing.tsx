import type { MetaFunction } from "react-router";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";
import logoLight from "/logo-light.svg?url";
import logoDark from "/logo-dark.svg?url";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane" },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

export default function Index() {
    return (
        <Container className="justify-center gap-4 max-w-lg">
            <div className="flex flex-row gap-8 md:gap-6 items-center">
                <img
                    // src={theme === "dark" ? logoDark : logoLight}
                    src={logoDark}
                    alt="logo"
                    className="w-24 h-24"
                />
                <Typography.Serif className="text-5xl font-bold">
                    {"Hi, I'm Haakon"}
                </Typography.Serif>
            </div>
            <Typography.Sans>
                My name is Haakon Hafsahl Svane. Welcome to what is, or at least will be, my
                personal site. This site acts as both a blog and a project showcase. Feel free to
                navigate around and see if there is anything that interests you.
            </Typography.Sans>
        </Container>
    );
}
