import { HTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

export type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
    ({ className, ...rest }, ref) => (
        <p
            ref={ref}
            className={tw("font-sans text-text-light dark:text-text-dark", className)}
            {...rest}
        />
    ),
);
Paragraph.displayName = "Paragraph";
