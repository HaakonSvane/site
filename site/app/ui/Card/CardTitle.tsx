import { HTMLAttributes } from "react";
import { tw } from "~/lib/utility";
import { Typography } from "../Typography";

type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = ({ className, children, ...props }: CardTitleProps) => (
    <Typography.Serif
        className={tw("text-2xl font-semibold leading-none tracking-tight", className)}
        {...props}
    >
        {children}
    </Typography.Serif>
);

CardTitle.displayName = "Card.Title";
