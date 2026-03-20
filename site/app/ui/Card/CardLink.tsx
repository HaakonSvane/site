import { Link, LinkProps } from "react-router";
import { forwardRef } from "react";
import { Card } from "./Card";

export type CardLinkProps = LinkProps;

export const CardLink = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => (
    <Link ref={ref} {...props}>
        <Card className="transition-all duration-200 hover:bg-foreground/5 hover:shadow-md hover:-translate-y-0.5">{children}</Card>
    </Link>
));
CardLink.displayName = "Card.Link";
