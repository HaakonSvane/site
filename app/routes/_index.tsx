import type { MetaFunction } from "@remix-run/node";
import { Typography } from "~/ui/Typography";
import logoLight from "../../public/logo-light.svg";
import logoDark from "../../public/logo-dark.svg";
import { ThemeButton } from "~/ui/ThemeButton";
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
        <div className="h-screen flex items-center justify-center flex-col gap-4">
            <img src={theme === "dark" ? logoDark : logoLight} alt="logo" className="w-40 h-40" />
            <div>
                <ThemeButton />
                <Typography.Heading className="text-5xl font-bold">Haakon Svane</Typography.Heading>
                <Typography.Paragraph>Personal blog to come soon</Typography.Paragraph>
            </div>
        </div>
    );
}
