import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";
import { getEnvValue } from "./lib/utility";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "site-theme",
        domain: process.env.NODE_ENV === "production" ? getEnvValue("BASE_URL") : undefined,
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secrets: [getEnvValue("SESSION_SECRET")],
        secure: process.env.NODE_ENV === "production",
    },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
