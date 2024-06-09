import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";

type DropdownMenuFamily = typeof RadixDropdownMenu.Root & {
    Item: typeof RadixDropdownMenu.Item;
    Trigger: typeof RadixDropdownMenu.Trigger;
    Content: typeof RadixDropdownMenu.Content;
    Portal: typeof RadixDropdownMenu.Portal;
    Arrow: typeof RadixDropdownMenu.Arrow;
    Separator: typeof RadixDropdownMenu.Separator;
};

export const DropdownMenu = RadixDropdownMenu.Root as DropdownMenuFamily;
DropdownMenu.Item = RadixDropdownMenu.Item;
DropdownMenu.Trigger = RadixDropdownMenu.Trigger;
DropdownMenu.Content = RadixDropdownMenu.Content;
DropdownMenu.Portal = RadixDropdownMenu.Portal;
DropdownMenu.Arrow = RadixDropdownMenu.Arrow;
DropdownMenu.Separator = RadixDropdownMenu.Separator;
