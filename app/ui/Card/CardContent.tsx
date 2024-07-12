import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={tw("px-6 py-4 pt-0", className)} {...props} />
    ),
);
CardContent.displayName = "CardContent";
