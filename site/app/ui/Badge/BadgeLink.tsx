import { ElementType, LinkHTMLAttributes } from "react";
import { tw } from "~/lib/utility";
import { Typography } from "../Typography";

export type BadgeLinkProps = {
    LeadingIcon?: ElementType;
    TrailingIcon?: ElementType;
    title: string;
} & Omit<LinkHTMLAttributes<HTMLAnchorElement>, "children">;
export const BadgeLink = ({
    LeadingIcon,
    TrailingIcon,
    className,
    title,
    ...rest
}: BadgeLinkProps) => {
    return (
        <a
            {...rest}
            className={tw(
                "rounded-sm border bg-card text-card-foreground p-2 flex flex-row space-x-2 items-center hover:bg-primary/5 transition-colors",
                className,
            )}
        >
            {LeadingIcon && <LeadingIcon className="size-4" />}
            <Typography.Sans className="font-bold">{title}</Typography.Sans>
            {TrailingIcon && <TrailingIcon className="size-4" />}
        </a>
    );
};
