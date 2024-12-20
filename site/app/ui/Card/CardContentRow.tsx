import { forwardRef, HTMLAttributes } from "react";
import { tw } from "~/lib/utility";

export const CardContentRow = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div {...props} className={tw("flex flex-row gap-x-4 items-center", className)} ref={ref} />
    ),
);
CardContentRow.displayName = "CardContentRow";
