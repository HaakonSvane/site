import { getMDXComponent } from "mdx-bundler/client";
import { Typography } from "~/ui/Typography";
import { tw } from "./utility";

type MDXComponent = NonNullable<Parameters<ReturnType<typeof getMDXComponent>>[0]["components"]>;
export const postComponents: MDXComponent = {
    h1: props => (
        <Typography.Serif
            className={tw(
                "[&:not(:first-child)]:mt-6 scroll-m-20 border-b border-border pb-2 mb-6 text-4xl font-bold tracking-tight lg:text-5xl",
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
            className={tw(
                "[&:not(:first-child)]:mt-6 leading-8 text-xl font-semibold",
                props.className,
            )}
            {...props}
        />
    ),
    h5: props => (
        <Typography.Serif
            className={tw("[&:not(:first-child)]:mt-6 leading-8 text-lg", props.className)}
            {...props}
        />
    ),
    h6: props => (
        <Typography.Serif
            className={tw("[&:not(:first-child)]:mt-6 leading-8 text-md", props.className)}
            {...props}
        />
    ),
    hr: props => <hr className={tw("shrink-0 border-border", props.className)} {...props} />,
    blockquote: props => (
        <blockquote
            className={tw("mt-6 border-l-2 pl-6 italic border-border", props.className)}
            {...props}
        />
    ),
    p: props => <Typography.Sans className={tw("leading-8 mb-6", props.className)} {...props} />,
    table: props => (
        <table className={tw("my-6 w-full max-w-lg mx-auto", props.className)} {...props} />
    ),
    tr: props => <tr className={tw("", props.className)} {...props} />,
    th: props => (
        <th className={tw("m-0 border-t border-border p-0", props.className)} {...props} />
    ),
    li: props => (
        <li className={tw("my-4 ml-6 list-disc [&>li]:mt-2", props.className)} {...props} />
    ),
    small: props => (
        <small className={tw("text-sm font-medium leading-none", props.className)} {...props} />
    ),
    svg: props => <svg className={tw("inline", props.className)} {...props} />,
    img: props => (
        <img
            alt="[missing alt]"
            {...props}
            className={tw("object-cover max-w-[80%] mx-auto", props.className)}
        />
    ),
};
