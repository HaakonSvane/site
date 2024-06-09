import { Title } from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { tw } from "~/lib/utility";

export const SideSheetTitle = forwardRef<
    React.ElementRef<typeof Title>,
    React.ComponentPropsWithoutRef<typeof Title>
>(({ className, ...props }, ref) => (
    <Title
        ref={ref}
        className={tw("text-lg font-semibold text-foreground", className)}
        {...props}
    />
));

SideSheetTitle.displayName = "SideSheetTitle";
