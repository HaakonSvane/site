import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import type { LinksFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, data, useLoaderData } from "react-router";
import tailwindStyles from "~/tailwind.css?url";
import { getTheme, setThemeCookie } from "./lib/server/theme.server";
import { ThemeContext } from "./lib/theme";
import { Route } from "./+types/root";
import { NavBar } from "./ui/NavBar";

export async function loader({ request }: Route.LoaderArgs) {
    return { theme: await getTheme(request) };
}

export async function action({ request }: Route.ActionArgs) {
    const formData = await request.formData();
    const theme = formData.get("theme") as string;
    return data(
        {},
        { headers: { "Set-Cookie": await setThemeCookie(theme) } },
    );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindStyles }];

export default function AppWithProviders({ loaderData }: Route.ComponentProps) {
    const [theme, setTheme] = useState<"light" | "dark">(loaderData.theme);
    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            <html lang="en" className={loaderData.theme}>
                <head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <Analytics />
                    <Meta />
                    <Links />
                </head>
                <body className="bg-background transition-colors font-sans text-foreground antialiased min-h-[100dvh]">
                    <div className="flex flex-col">
                        <NavBar />
                        <Outlet />
                    </div>
                    <ScrollRestoration />
                    <Scripts />
                </body>
            </html>
        </ThemeContext.Provider>
    );
}
