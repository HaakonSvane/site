import { HTMLAttributes } from "react";
import { tw } from "~/lib/utility";

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...rest }: ButtonProps) => (
    <button className={tw("px-4 py-2 font-semibold", className)} {...rest} />
);
