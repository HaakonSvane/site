import { Link } from "@radix-ui/react-navigation-menu";
import { HtmlHTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";
import { Heading } from "../Typography/Heading";

export type NavMenuListItemProps = {
    title: string;
};

export const NavMenuListItem = forwardRef<
    HTMLAnchorElement,
    NavMenuListItemProps & HtmlHTMLAttributes<HTMLAnchorElement>
>((props, ref) => {
    return (
        <li>
            <Link asChild>
                <a ref={ref} className={tw("", props.className)} {...props}>
                    <Heading>{props.title}</Heading>
                    {props.children}
                </a>
            </Link>
        </li>
    );
});
NavMenuListItem.displayName = "NavMenu.ListItem";
