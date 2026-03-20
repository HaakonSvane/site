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
                "rounded-full border bg-card text-card-foreground px-3 py-1.5 flex flex-row space-x-1.5 items-center",
                className,
            )}
        >
            {LeadingIcon && <LeadingIcon className="size-4" />}
            <Typography.Sans>{title}</Typography.Sans>
            {TrailingIcon && <TrailingIcon className="size-4" />}
        </div>
    );
};
