import type { MetaFunction } from "react-router";
import { useTheme } from "~/lib/theme";
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
    const [theme] = useTheme();
    return (
        <Container className="flex flex-1 flex-col justify-center gap-8 max-w-2xl py-16">
            <img src={theme === "dark" ? logoDark : logoLight} alt="logo" className="w-20 h-20" />
            <div className="flex flex-col gap-4">
                <Typography.Serif className="text-5xl font-bold">
                    {"Hi, I'm Haakon"}
                </Typography.Serif>
                <Typography.Sans className="text-lg leading-relaxed">
                    My name is Haakon Hafsahl Svane. Welcome to what is, or at least will be, my
                    personal site. This site acts as both a blog and a project showcase. Feel free
                    to navigate around and see if there is anything that interests you.
                </Typography.Sans>
            </div>
        </Container>
    );
}
