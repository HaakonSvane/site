import { Moon, Sun } from "lucide-react";
import React from "react";
import { useFetcher } from "react-router";
import { useTheme } from "~/lib/theme";
import { Button } from "./Button";
import { ToggleButton } from "./ToggleButton";

type ThemeButtonProps = Omit<React.ComponentProps<typeof Button>, "value" | "onChange">;

export const ThemeButton = ({ ...rest }: ThemeButtonProps) => {
    const [theme, setTheme] = useTheme();
    const fetcher = useFetcher();

    const handleChange = (value: string) => {
        const next = value as "light" | "dark";
        setTheme(next);
        fetcher.submit({ theme: next }, { method: "POST", action: "/" });
    };

    return (
        <ToggleButton
            value={theme}
            values={[
                { icon: Sun, label: "Light", value: "light" },
                { icon: Moon, label: "Dark", value: "dark" },
            ]}
            onChange={handleChange}
            {...rest}
        />
    );
};
