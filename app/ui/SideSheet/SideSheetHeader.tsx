import { HTMLAttributes } from "react";
import { tw } from "~/lib/utility";

export const SideSheetHeader = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div className={tw("flex flex-col space-y-2 text-center sm:text-left", className)} {...props} />
);

SideSheetHeader.displayName = "SideSheetHeader";
