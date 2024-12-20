import * as RadixSeparator from "@radix-ui/react-separator";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { tw } from "~/lib/utility";

export const Separator = forwardRef<
    ElementRef<typeof RadixSeparator.Root>,
    ComponentPropsWithoutRef<typeof RadixSeparator.Root>
>(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => (
    <RadixSeparator.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={tw(
            "shrink-0 bg-border",
            orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
            className,
        )}
        {...props}
    />
));
Separator.displayName = "Separator";
