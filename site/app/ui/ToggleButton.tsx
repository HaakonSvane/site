import { LucideIcon } from "lucide-react";
import { Button } from "./Button";
import { tw } from "~/lib/utility";

export type ToggleButtonProps<T, K extends T> = {
    value: K;
    values: {
        icon?: LucideIcon;
        label: string;
        value: T;
    }[];
    onChange: (value: K) => void;
} & Omit<React.ComponentProps<typeof Button>, "onClick" | "onChange">;

export const ToggleButton = <T, K extends T>({
    value,
    values,
    onChange,
    className,
    ...rest
}: ToggleButtonProps<T, K>) => {
    const currentValue = values.find(v => v.value === value);

    const setNextValue = () => {
        const currentIndex = values.findIndex(v => v.value === value);
        const nextIndex = (currentIndex + 1) % values.length;
        const newValue = values.at(nextIndex)!.value;
        onChange(newValue as K);
    };

    return (
        <Button
            variant="ghost"
            className={tw("flex flex-row gap-2", className)}
            onClick={setNextValue}
            {...rest}
        >
            {currentValue?.icon && <currentValue.icon />}
            {currentValue?.label}
        </Button>
    );
};
