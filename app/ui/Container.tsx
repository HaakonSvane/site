import { forwardRef } from "react";

export const Container = forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(
    ({ className, ...rest }, ref) => (
        <div ref={ref} className={`max-w-5xl mx-auto px-4 md:px-8 ${className}`} {...rest} />
    ),
);

Container.displayName = "Container";
