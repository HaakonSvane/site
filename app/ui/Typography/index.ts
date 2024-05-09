import { Serif } from "./Serif";
import type { SerifProps } from "./Serif";
import { Sans } from "./Sans";
import type { SansProps } from "./Sans";

type TypographyFamily = {
    Serif: typeof Serif;
    Sans: typeof Sans;
};

const Typography: TypographyFamily = {
    Serif,
    Sans,
};

export { Typography };
export type { SansProps, SerifProps };
