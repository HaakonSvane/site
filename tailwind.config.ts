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
                background: {
                    light: "#F3F4F7",
                    dark: "#1F222E",
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
