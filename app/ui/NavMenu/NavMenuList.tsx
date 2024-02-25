import { List, NavigationMenuListProps } from "@radix-ui/react-navigation-menu";
import { forwardRef } from "react";
import { tw } from "~/lib/utility";

export const NavMenuList = forwardRef<HTMLUListElement, NavigationMenuListProps>(
    ({ className, children, ...rest }, ref) => {
        return (
            <List
                className={tw(
                    "group flex flex-1 list-none items-center justify-center space-x-1",
                    className,
                )}
                ref={ref}
                {...rest}
            >
                {children}
            </List>
        );
    },
);

NavMenuList.displayName = "NavMenu.List";
