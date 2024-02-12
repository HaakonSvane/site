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
};

export const ToggleButton = <T, K extends T>({
    value,
    values,
    onChange,
}: ToggleButtonProps<T, K>) => {
    const currentValue = values.find(v => v.value === value);

    const setNextValue = () => {
        const currentIndex = values.findIndex(v => v.value === value);
        const nextIndex = (currentIndex + 1) % values.length;
        const newValue = values.at(nextIndex)!.value;
        onChange(newValue as K);
    };

    return (
        <Button className={tw("flex flex-row gap-2")} onClick={setNextValue}>
            {currentValue?.icon && <currentValue.icon />}
            {currentValue?.label}
        </Button>
    );
};
