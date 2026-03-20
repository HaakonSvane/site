import * as RadixSheet from "@radix-ui/react-dialog";
import { SideSheetContent } from "./SideSheet";

type SideSheetFamily = typeof RadixSheet.Root & {
    Content: typeof SideSheetContent;
    Trigger: typeof RadixSheet.Trigger;
};

export const SideSheet = RadixSheet.Root as SideSheetFamily;
SideSheet.Content = SideSheetContent;
SideSheet.Trigger = RadixSheet.Trigger;

export type { SideSheetContentProps as SideSheetProps } from "./SideSheet";
