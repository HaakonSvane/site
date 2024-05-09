import { getMDXComponent } from "mdx-bundler/client";
import { Typography } from "~/ui/Typography";
import { tw } from "./utility";

type MDXComponent = NonNullable<Parameters<ReturnType<typeof getMDXComponent>>[0]["components"]>;
export const postComponents: MDXComponent = {
    h1: props => (
        <Typography.Serif
            className={tw(
                "[&:not(:first-child)]:mt-6 scroll-m-20 border-b border-border-light dark:border-border-dark pb-2 mb-6 text-4xl font-bold tracking-tight lg:text-5xl",
                props.className,
            )}
            {...props}
        />
    ),
    h2: props => (
        <Typography.Serif
            className={tw(
                "[&:not(:first-child)]:mt-6 scroll-m-20 pb-0 mb-0 text-3xl font-extrabold tracking-tight first:mt-0",
                props.className,
            )}
            {...props}
        />
    ),
    h3: props => (
        <Typography.Serif
            className={tw(
                "[&:not(:first-child)]:mt-6 scroll-m-20 text-2xl font-semibold tracking-tight",
                props.className,
            )}
            {...props}
        />
    ),
    h4: props => (
        <Typography.Serif
            className={tw("[&:not(:first-child)]:mt-6 leading-7", props.className)}
            {...props}
        />
    ),
    hr: props => (
        <hr
            className={tw("shrink-0 border-border-light dark:border-border-dark", props.className)}
            {...props}
        />
    ),
    blockquote: props => (
        <blockquote
            className={tw(
                "mt-6 border-l-2 pl-6 italic border-border-light dark:border-border-dark",
                props.className,
            )}
            {...props}
        />
    ),
    p: props => (
        <Typography.Sans as="span" className={tw("leading-7", props.className)} {...props} />
    ),
    table: props => <table className={tw("w-full", props.className)} {...props} />,
    tr: props => <tr className={tw("", props.className)} {...props} />,
    th: props => (
        <th
            className={tw(
                "m-0 border-t border-border-light dark:border-border-dark p-0",
                props.className,
            )}
            {...props}
        />
    ),
    li: props => (
        <li className={tw("my-4 ml-6 list-disc [&>li]:mt-2", props.className)} {...props} />
    ),
    code: props => (
        <code
            className={tw(
                "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
                props.className,
            )}
            {...props}
        />
    ),
    small: props => (
        <small className={tw("text-sm font-medium leading-none", props.className)} {...props} />
    ),
};
