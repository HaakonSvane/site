import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export type HeadingProps = HTMLAttributes<HTMLHeadingElement>;

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
    ({ className, children, ...rest }, ref) => (
        <h1
            ref={ref}
            className={tw("text-text-light dark:text-text-dark font-heading", className)}
            {...rest}
        >
            {children}
        </h1>
    ),
);
Heading.displayName = "Heading";
