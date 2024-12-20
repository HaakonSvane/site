import * as RadixSheet from "@radix-ui/react-dialog";
import { SideSheetContent } from "./SideSheet";
import { SideSheetHeader } from "./SideSheetHeader";
import { SideSheetTitle } from "./SideSheetTitle";
import { SideSheetDescription } from "./SideSheetDescription";
import { SideSheetFooter } from "./SideSheetFooter";

type SideSheetFamily = typeof RadixSheet.Root & {
    Content: typeof SideSheetContent;
    Header: typeof SideSheetHeader;
    Title: typeof SideSheetTitle;
    Description: typeof SideSheetDescription;
    Footer: typeof SideSheetFooter;
    Trigger: typeof RadixSheet.Trigger;
};

export const SideSheet = RadixSheet.Root as SideSheetFamily;
SideSheet.Content = SideSheetContent;
SideSheet.Header = SideSheetHeader;
SideSheet.Title = SideSheetTitle;
SideSheet.Description = SideSheetDescription;
SideSheet.Footer = SideSheetFooter;
SideSheet.Trigger = RadixSheet.Trigger;

export type { SideSheetContentProps as SideSheetProps } from "./SideSheet";
