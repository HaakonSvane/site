import { HTMLAttributes } from "react";
import { tw } from "~/lib/utility";

export const SideSheetFooter = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={tw("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
        {...props}
    />
);

SideSheetFooter.displayName = "SideSheetFooter";
