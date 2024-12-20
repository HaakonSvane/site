import { Moon, Sun } from "lucide-react";
import React from "react";
import { Theme, useTheme } from "remix-themes";
import { Button } from "./Button";
import { ToggleButton } from "./ToggleButton";

type ThemeButtonProps = Omit<React.ComponentProps<typeof Button>, "value" | "onChange">;

export const ThemeButton = ({ ...rest }: ThemeButtonProps) => {
    const [theme, setTheme] = useTheme();
    return (
        <ToggleButton
            value={(theme ?? "light") as Theme}
            values={[
                { icon: Sun, label: "Light", value: "light" },
                { icon: Moon, label: "Dark", value: "dark" },
                // { icon: SunMoon, label: "Auto", value: null },
            ]}
            onChange={setTheme}
            {...rest}
        />
    );
};
