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
import { Analytics } from "@vercel/analytics/react";
import tailwindStyles from "~/tailwind.css";

import { PreventFlashOnWrongTheme, ThemeProvider, useTheme } from "remix-themes";
import { themeSessionResolver } from "./sessions.server";
import { NavBar } from "./ui/NavBar";

export const loader: LoaderFunction = async ({ request }) => {
    const { getTheme } = await themeSessionResolver(request);
    return {
        theme: getTheme(),
    };
};

type LoaderData = typeof loader;

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindStyles }];

function App() {
    const loaderData = useLoaderData<LoaderData>();
    const [theme] = useTheme();
    return (
        <html lang="en" className={theme ?? ""}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Analytics />
                <Meta />
                <PreventFlashOnWrongTheme ssrTheme={Boolean(loaderData.theme)} />
                <Links />
            </head>
            <body className="flex flex-col min-h-screen bg-background font-sans text-text-light dark:text-text-dark antialiased">
                <NavBar />
                <div className="flex flex-1">
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
