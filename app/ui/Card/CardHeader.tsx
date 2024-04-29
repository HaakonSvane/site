import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={tw("flex flex-col space-y-1.5 p-6", className)} {...props} />
    ),
);
CardHeader.displayName = "Card.Header";
