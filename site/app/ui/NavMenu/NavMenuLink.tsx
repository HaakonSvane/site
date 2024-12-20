import { NavigationMenuLink, NavigationMenuLinkProps } from "@radix-ui/react-navigation-menu";
import { NavLink } from "@remix-run/react";
import { cva } from "class-variance-authority";
import { HtmlHTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

const navigationMenuTriggerStyle = cva(
    "group font-semibold inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
);

export const NavMenuLink = forwardRef<
    HTMLAnchorElement,
    NavigationMenuLinkProps & HtmlHTMLAttributes<HTMLAnchorElement>
>(({ className, children, href, ...rest }, ref) => {
    return (
        <NavigationMenuLink
            className={tw(navigationMenuTriggerStyle(), className)}
            ref={ref}
            asChild
            {...rest}
        >
            <NavLink to={href ?? "#"}>{children}</NavLink>
        </NavigationMenuLink>
    );
});

NavMenuLink.displayName = "NavMenu.Link";
