import { Overlay, Portal, Content, Close } from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react";
import { tw } from "~/lib/utility";

const SideSheetOverlay = forwardRef<
    ElementRef<typeof Overlay>,
    ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
    <Overlay
        className={tw(
            "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className,
        )}
        {...props}
        ref={ref}
    />
));
SideSheetOverlay.displayName = "SideSheetOverlay";

const SideSheetPortal = Portal;

const sideSheetStyle = tw(
    "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
    "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
);

export type SideSheetContentProps = React.ComponentPropsWithoutRef<typeof Content>;

export const SideSheetContent = forwardRef<React.ElementRef<typeof Content>, SideSheetContentProps>(
    ({ className, children, ...props }, ref) => (
        <SideSheetPortal>
            <SideSheetOverlay />
            <Content ref={ref} className={tw(sideSheetStyle, className)} {...props}>
                {children}
                <Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                </Close>
            </Content>
        </SideSheetPortal>
    ),
);
SideSheetContent.displayName = "SideSheetContent";
