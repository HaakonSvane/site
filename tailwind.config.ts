import type { Config } from "tailwindcss";

export default {
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                sans: ["Titillium Web", "sans-serif"],
                heading: ["Playfair Display", "serif"],
            },
            colors: {
                primary: {
                    light: "#455F55",
                    dark: "#9FBAAF",
                },
                secondary: {
                    light: "#203A46",
                    dark: "#424861",
                },
                background: {
                    light: "#F3F4F7",
                    dark: "#1F222E",
                },
                muted: {
                    light: "#D9DBDE",
                    dark: "#525A7A",
                },
                border: {
                    light: "#C0C1C4",
                    dark: "#414761",
                },
                text: {
                    light: "#172A33",
                    dark: "#F3F4F7",
                },
                danger: {
                    light: "#FF6C5E",
                    dark: "#FF9B91",
                },
                warning: {
                    ligth: "#FFC549",
                    dark: "#FFC549",
                },
                info: {
                    light: "#2A97B7",
                    dark: "#2A97B7",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
