import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import { tw } from "~/lib/utility";

const buttonVariants = cva(
    "inline-flex items-center justify-center font-semibold rounded-md transition-colors ring-offset-background-dark dark:ring-offset-background-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-primary-light dark:primary-dark text-text-dark dark:text-text-light hover:bg-primary-light/90 dark:hover:bg-primary-dark/90",
                destructive:
                    "bg-danger-light dark:bg-danger-dark text-text-light dark:text-text-dark hover:bg-danger-light/90 dark:hover:bg-danger-dark/90",
                outline:
                    "border border-text-light dark:border-text-dark bg-background-light dark:bg-background-dark hover:bg-background-light/90 dark:hover:bg-background-dark/90",
                secondary:
                    "bg-secondary-light dark:secondary-dark text-text-dark hover:bg-secondary-light/90 dark:hover:bg-secondary-dark/90",
                ghost: "", //TODO
                link: "text-text-light dark:text-text-dark underline-offset-4 hover:underline",
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

export const Button = ({ className, variant, size, ...rest }: ButtonProps) => (
    <button className={tw(buttonVariants({ variant, size, className }))} {...rest} />
);
