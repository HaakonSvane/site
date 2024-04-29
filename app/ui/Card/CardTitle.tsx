import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";
import { Typography } from "../Typography";

export const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, children, ...props }, ref) => (
        <Typography.Heading
            ref={ref}
            className={tw("text-2xl font-semibold leading-none tracking-tight", className)}
            {...props}
        >
            {children}
        </Typography.Heading>
    ),
);
CardTitle.displayName = "Card.Title";
