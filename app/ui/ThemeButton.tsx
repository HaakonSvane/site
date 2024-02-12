import { Theme, useTheme } from "remix-themes";
import { ToggleButton } from "./ToggleButton";
import { Moon, Sun } from "lucide-react";

export const ThemeButton = () => {
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
        />
    );
};
