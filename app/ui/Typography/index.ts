import { Heading } from "./Heading";
import type { HeadingProps } from "./Heading";
import { Paragraph } from "./Paragraph";
import type { ParagraphProps } from "./Paragraph";

type TypographyFamily = {
    Heading: typeof Heading;
    Paragraph: typeof Paragraph;
};

const Typography: TypographyFamily = {
    Heading,
    Paragraph,
};

export { Typography };
export type { ParagraphProps, HeadingProps };
