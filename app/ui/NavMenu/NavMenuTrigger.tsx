import { forwardRef, ElementRef, ComponentPropsWithoutRef } from "react";
import { Trigger as RadixTrigger } from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { tw } from "~/lib/utility";

const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

export const NavMenuTrigger = forwardRef<
    ElementRef<typeof RadixTrigger>,
    ComponentPropsWithoutRef<typeof RadixTrigger>
>(({ className, children, ...rest }, ref) => {
    return (
        <RadixTrigger
            className={tw(navigationMenuTriggerStyle(), "group", className)}
            ref={ref}
            {...rest}
        >
            {children}
        </RadixTrigger>
    );
});

NavMenuTrigger.displayName = "NavMenu.Trigger";
