import { Analytics } from "@vercel/analytics/react";
import type { LinksFunction, LoaderFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import tailwindStyles from "~/tailwind.css?url";
import { themeSessionResolver } from "./sessions.server";

export const loader: LoaderFunction = async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);
    return {
        theme: getTheme(),
    };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindStyles }];

function App() {
    const loaderData = useLoaderData();
    const [theme] = useTheme();
    return (
        <html lang="en" className={theme ?? "light"}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Analytics />
                <Meta />
                <PreventFlashOnWrongTheme ssrTheme={Boolean(loaderData.theme)} />
                <Links />
            </head>
            <body className="bg-background transition-colors font-sans text-foreground antialiased min-h-[100dvh]">
                <div className="flex flex-col">
                    <Outlet />
                    <div className="bg-red-300"></div>
                </div>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}

export default function AppWithProviders() {
    const loaderData = useLoaderData();
    return (
        <ThemeProvider specifiedTheme={loaderData.theme} themeAction="/action.setTheme">
            <App />
        </ThemeProvider>
    );
}
