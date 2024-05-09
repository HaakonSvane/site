import { ElementType, HTMLAttributes } from "react";
import { Typography } from "../Typography";
import { tw } from "~/lib/utility";

export type BadgeProps = {
    LeadingIcon?: ElementType;
    TrailingIcon?: ElementType;
} & Omit<HTMLAttributes<HTMLDivElement>, "children">;

export const Badge = ({ title, LeadingIcon, TrailingIcon, className, ...rest }: BadgeProps) => {
    return (
        <div
            {...rest}
            className={tw(
                "rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center",
                className,
            )}
        >
            {LeadingIcon && <LeadingIcon className="size-4" />}
            <Typography.Sans>{title}</Typography.Sans>
            {TrailingIcon && <TrailingIcon className="size-4" />}
        </div>
    );
};
