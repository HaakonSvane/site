import type { LinksFunction, LoaderFunction } from "react-router";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import tailwindStyles from "~/tailwind.css?url";

import { SpeedInsights } from "@vercel/speed-insights/remix";
import { NavBar } from "./ui/NavBar";

// export const loader: LoaderFunction = async ({ request }) => {
//     const { getTheme } = await themeSessionResolver(request);
//     return {
//         theme: getTheme(),
//     };
// };

// type LoaderData = typeof loader;

export const links: LinksFunction = () => [{ rel: "stylesheet", href: tailwindStyles }];

function App() {
    // const loaderData = useLoaderData<LoaderData>();
    return (
        <html lang="en" className={"light"}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Analytics />
                <SpeedInsights />
                <Meta />
                {/* <PreventFlashOnWrongTheme ssrTheme={Boolean(loaderData.theme)} /> */}
                <Links />
            </head>
            <body className="bg-background transition-colors font-sans text-foreground antialiased min-h-[100dvh]">
                <div className="flex flex-col">
                    <NavBar />
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
    // const loaderData = useLoaderData<LoaderData>();
    return <App />;
}
