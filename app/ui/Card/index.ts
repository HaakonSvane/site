import { Card as _Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardDescription } from "./CardDescription";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardLink } from "./CardLink";
import { CardTitle } from "./CardTitle";

type CardFamily = typeof _Card & {
    Content: typeof CardContent;
    Description: typeof CardDescription;
    Footer: typeof CardFooter;
    Header: typeof CardHeader;
    Title: typeof CardTitle;
    Link: typeof CardLink;
};

const Card = _Card as CardFamily;

Card.Content = CardContent;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Link = CardLink;

export { Card };
