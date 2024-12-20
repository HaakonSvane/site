import { Badge as _Badge, BadgeProps } from "./Badge";
import { BadgeLink, BadgeLinkProps } from "./BadgeLink";

type BadgeFamily = typeof _Badge & {
    Link: typeof BadgeLink;
};

const Badge = _Badge as BadgeFamily;
Badge.Link = BadgeLink;

export { Badge };
export type { BadgeProps, BadgeLinkProps };
