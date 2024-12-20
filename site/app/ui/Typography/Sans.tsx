import { ComponentPropsWithoutRef, ElementType } from "react";
import { tw } from "~/lib/utility";
import { TypographyAsProps } from "./types";

export type SansProps<TElem extends ElementType = "p"> = ComponentPropsWithoutRef<TElem> &
    TypographyAsProps<TElem>;

export const Sans = <TElem extends ElementType = "p">({
    as,
    className,
    ...rest
}: SansProps<TElem>) => {
    const Component = as ?? "p";
    return (
        <Component
            {...rest}
            className={tw("font-sans text-foreground transition-color", className)}
        />
    );
};

Sans.displayName = "Sans";
