import { createCookie } from "react-router";

const themeCookie = createCookie("theme", { maxAge: 31_536_000, sameSite: "lax" });

export async function getTheme(request: Request): Promise<"light" | "dark"> {
    const val = await themeCookie.parse(request.headers.get("Cookie"));
    return val === "dark" ? "dark" : "light";
}

export async function setThemeCookie(theme: string) {
    return themeCookie.serialize(theme);
}
