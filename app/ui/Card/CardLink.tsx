import { forwardRef } from "react";
import { tw } from "~/lib/utility";
import { Card } from "./Card";
import { Link, LinkProps } from "@remix-run/react";

export type CardLinkProps = LinkProps;

export const CardLink = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ className, children, ...props }, ref) => (
        <Link ref={ref} className={tw("", className)} {...props}>
            <Card>{children}</Card>
        </Link>
    ),
);
CardLink.displayName = "Card.Link";
