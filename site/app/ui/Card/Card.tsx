import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={tw("rounded-sm border bg-card text-card-foreground shadow-sm", className)}
            {...props}
        />
    ),
);
Card.displayName = "Card";
