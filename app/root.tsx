import tailwindStyles from "~/tailwind.css";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from "@remix-run/react";

import { ThemeProvider, useTheme, PreventFlashOnWrongTheme, Theme } from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { NavBar } from "./ui/NavBar";

type LoaderData = {
    theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);
    return {
        theme: getTheme(),
    };
};

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindStyles }];

function App() {
    const loaderData = useLoaderData<LoaderData>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={theme ?? ""}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <PreventFlashOnWrongTheme ssrTheme={Boolean(loaderData.theme)} />
                <Links />
            </head>
            <body className="flex flex-col h-screen bg-background-light dark:bg-background-dark bg-background font-sans text-text-light dark:text-text-dark antialiased">
                <NavBar />
                <div className="flex-auto grow">
                    <Outlet />
                </div>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

export default function AppWithProviders() {
    const loaderData = useLoaderData<LoaderData>();
    return (
        <ThemeProvider specifiedTheme={loaderData.theme} themeAction="/action/setTheme">
            <App />
        </ThemeProvider>
    );
}
