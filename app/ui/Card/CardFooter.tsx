import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={tw("flex items-center p-6 pt-0", className)} {...props} />
    ),
);
CardFooter.displayName = "Card.Footer";
