import type { MetaFunction } from "@remix-run/node";
import { Container } from "~/ui/Container";
import { Typography } from "~/ui/Typography";
import logoLight from "~/../public/logo-light.svg";
import logoDark from "~/../public/logo-dark.svg";
import { useTheme } from "remix-themes";

export const meta: MetaFunction = () => {
    return [
        { title: "Haakon Svane" },
        { name: "description", content: "Personal site for Haakon Svane" },
    ];
};

export default function Index() {
    const [theme] = useTheme();
    return (
        <Container className="justify-center gap-4 max-w-lg">
            <div className="flex flex-row gap-8 md:gap-6 items-center">
                <img
                    src={theme === "dark" ? logoDark : logoLight}
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
