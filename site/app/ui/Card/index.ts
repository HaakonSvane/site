import { Card as _Card } from "./Card";
import { CardContent } from "./CardContent";
import { CardContentRow } from "./CardContentRow";
import { CardDescription } from "./CardDescription";
import { CardHeader } from "./CardHeader";
import { CardLink } from "./CardLink";
import { CardTitle } from "./CardTitle";

type CardFamily = typeof _Card & {
    Content: typeof CardContent;
    ContentRow: typeof CardContentRow;
    Description: typeof CardDescription;
    Header: typeof CardHeader;
    Title: typeof CardTitle;
    Link: typeof CardLink;
};

const Card = _Card as CardFamily;

Card.Content = CardContent;
Card.ContentRow = CardContentRow;
Card.Description = CardDescription;
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Link = CardLink;

export { Card };
