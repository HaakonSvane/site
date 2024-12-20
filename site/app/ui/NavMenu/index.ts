import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { NavMenuListItem } from "./NavMenuListItem";
import { NavMenuList } from "./NavMenuList";
import { NavMenuLink } from "./NavMenuLink";
import { NavMenuTrigger } from "./NavMenuTrigger";

type NavMenuFamily = typeof RadixNavigationMenu.Root & {
    Item: typeof RadixNavigationMenu.Item;
    Trigger: typeof NavMenuTrigger;
    Content: typeof RadixNavigationMenu.Content;
    Link: typeof NavMenuLink;
    List: typeof NavMenuList;
    ListItem: typeof NavMenuListItem;
    Indicator: typeof RadixNavigationMenu.Indicator;
};

export const NavMenu = RadixNavigationMenu.Root as NavMenuFamily;

NavMenu.Item = RadixNavigationMenu.Item;
NavMenu.Trigger = NavMenuTrigger;
NavMenu.Content = RadixNavigationMenu.Content;
NavMenu.Link = NavMenuLink;
NavMenu.List = NavMenuList;
NavMenu.ListItem = NavMenuListItem;
NavMenu.Indicator = RadixNavigationMenu.Indicator;
