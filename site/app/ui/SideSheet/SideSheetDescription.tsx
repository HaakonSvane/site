import { Description } from "@radix-ui/react-dialog";
import { forwardRef } from "react";
import { tw } from "~/lib/utility";

export const SideSheetDescription = forwardRef<
    React.ElementRef<typeof Description>,
    React.ComponentPropsWithoutRef<typeof Description>
>(({ className, ...props }, ref) => (
    <Description ref={ref} className={tw("text-sm text-muted-foreground", className)} {...props} />
));

SideSheetDescription.displayName = "SideSheetDescription";
