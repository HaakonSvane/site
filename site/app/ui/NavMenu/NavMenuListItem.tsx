import { Link } from "@radix-ui/react-navigation-menu";
import { HtmlHTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";
import { Serif } from "../Typography/Serif";

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
                    <Serif>{props.title}</Serif>
                    {props.children}
                </a>
            </Link>
        </li>
    );
});
NavMenuListItem.displayName = "NavMenu.ListItem";
