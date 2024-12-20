import { Link, LinkProps } from "@remix-run/react";
import { forwardRef } from "react";
import { Card } from "./Card";

export type CardLinkProps = LinkProps;

export const CardLink = forwardRef<HTMLAnchorElement, LinkProps>(({ children, ...props }, ref) => (
    <Link ref={ref} {...props}>
        <Card className="transition-colors hover:bg-foreground/5">{children}</Card>
    </Link>
));
CardLink.displayName = "Card.Link";
