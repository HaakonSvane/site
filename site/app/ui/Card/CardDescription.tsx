import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const CardDescription = forwardRef<
    HTMLParagraphElement,
    HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p ref={ref} className={tw("text-sm text-muted-foreground", className)} {...props} />
));
CardDescription.displayName = "Card.Description";
