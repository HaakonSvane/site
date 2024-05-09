import { ComponentPropsWithoutRef, ElementType } from "react";
import { tw } from "~/lib/utility";
import { TypographyAsProps } from "./types";

export type SerifProps<TElem extends ElementType = "p"> = ComponentPropsWithoutRef<TElem> &
    TypographyAsProps<TElem>;

export const Serif = <TElem extends ElementType = "p">({
    as,
    className,
    ...rest
}: SerifProps<TElem>) => {
    const Component = as ?? "p";
    return (
        <Component
            {...rest}
            className={tw("text-text-light dark:text-text-dark font-heading", className)}
        />
    );
};

Serif.displayName = "Serif";
