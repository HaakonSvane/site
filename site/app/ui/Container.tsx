import { forwardRef } from "react";
import { tw } from "~/lib/utility";

export const Container = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    ({ className, ...rest }, ref) => (
        <div
            ref={ref}
            className={tw("max-w-5xl px-6 md:px-8 mx-auto w-full min-w-0", className)}
            {...rest}
        />
    ),
);

Container.displayName = "Container";
