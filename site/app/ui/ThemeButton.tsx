import { Moon, Sun } from "lucide-react";
import React from "react";
import { Button } from "./Button";
import { ToggleButton } from "./ToggleButton";
import { Theme, useTheme } from "remix-themes";

type ThemeButtonProps = Omit<React.ComponentProps<typeof Button>, "value" | "onChange">;

export const ThemeButton = ({ ...rest }: ThemeButtonProps) => {
    // const [theme, setTheme] = useTheme();
    return (
        <ToggleButton
            value={"light"}
            values={[
                { icon: Sun, label: "Light", value: "light" },
                { icon: Moon, label: "Dark", value: "dark" },
            ]}
            onChange={() => null}
            {...rest}
        />
    );
};
