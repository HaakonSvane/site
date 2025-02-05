import { createThemeSessionResolver } from "remix-themes";
import { createCookieSessionStorage } from "react-router";
import { getEnvValue } from "./lib/utility";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        domain: process.env.NODE_ENV === "production" ? getEnvValue("BASE_URL") : undefined,
        name: "__remix-themes",
        path: "/",
        httpOnly: true,
        sameSite: "lax",
        secrets: [getEnvValue("SESSION_SECRET")],
        secure: process.env.NODE_ENV === "production",
    },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
