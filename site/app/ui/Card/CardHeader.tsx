import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={tw("flex flex-col gap-2 px-6 py-4", className)} {...props} />
    ),
);
CardHeader.displayName = "Card.Header";
