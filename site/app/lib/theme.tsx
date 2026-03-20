import { createContext, useContext } from "react";

export const ThemeContext = createContext<["light" | "dark", (theme: "light" | "dark") => void]>([
    "light",
    () => {},
]);

export function useTheme() {
    return useContext(ThemeContext);
}
