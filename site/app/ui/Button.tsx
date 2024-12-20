import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { tw } from "~/lib/utility";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive: "bg-danger text-danger-foreground hover:bg-danger/90",
                outline: "border border-text bg-background hover:bg-background/90",
                secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                ghost: "", //TODO
                link: "text-foreground underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...rest }: ButtonProps, ref) => (
        <button ref={ref} className={tw(buttonVariants({ variant, size, className }))} {...rest} />
    ),
);

Button.displayName = "Button";
