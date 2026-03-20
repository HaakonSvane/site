import { getMDXComponent } from "mdx-bundler/client";
import { Typography } from "~/ui/Typography";
import { tw } from "./utility";

type MDXComponent = NonNullable<Parameters<ReturnType<typeof getMDXComponent>>[0]["components"]>;
export const postComponents: MDXComponent = {
    h1: props => (
        <Typography.Serif
            className={tw(
                "mt-0 mb-8 text-4xl font-bold tracking-tight lg:text-5xl border-b border-border pb-4",
                props.className,
            )}
            {...props}
        />
    ),
    h2: props => (
        <Typography.Serif
            className={tw("mt-10 mb-4 text-3xl font-bold tracking-tight", props.className)}
            {...props}
        />
    ),
    h3: props => (
        <Typography.Serif
            className={tw("mt-8 mb-3 text-2xl font-semibold tracking-tight", props.className)}
            {...props}
        />
    ),
    h4: props => (
        <Typography.Serif
            className={tw("mt-6 mb-2 text-xl font-semibold", props.className)}
            {...props}
        />
    ),
    h5: props => (
        <Typography.Serif
            className={tw("mt-6 mb-2 text-lg font-semibold", props.className)}
            {...props}
        />
    ),
    h6: props => (
        <Typography.Serif
            className={tw("mt-6 mb-2 text-base font-semibold", props.className)}
            {...props}
        />
    ),
    hr: props => <hr className={tw("my-8 border-border", props.className)} {...props} />,
    blockquote: props => (
        <blockquote
            className={tw(
                "mt-6 border-l-4 border-primary/40 pl-6 py-1 italic bg-muted/20 rounded-r-md",
                props.className,
            )}
            {...props}
        />
    ),
    p: props => <Typography.Sans className={tw("leading-8 mb-6", props.className)} {...props} />,
    ul: props => <ul className={tw("my-6 ml-6 list-disc space-y-2", props.className)} {...props} />,
    ol: props => (
        <ol className={tw("my-6 ml-6 list-decimal space-y-2", props.className)} {...props} />
    ),
    li: props => <li className={tw("mt-2 leading-7", props.className)} {...props} />,
    code: props => (
        <code
            className={tw(
                "relative rounded bg-muted/60 px-[0.4em] py-[0.2em] font-mono text-sm",
                props.className,
            )}
            {...props}
        />
    ),
    a: props => (
        <a
            className={tw(
                "font-medium underline underline-offset-4 hover:text-primary transition-colors",
                props.className,
            )}
            {...props}
        />
    ),
    table: props => (
        <table className={tw("my-6 w-full max-w-lg mx-auto", props.className)} {...props} />
    ),
    tr: props => <tr className={tw("", props.className)} {...props} />,
    th: props => (
        <th className={tw("m-0 border-t border-border p-0", props.className)} {...props} />
    ),
    small: props => (
        <small className={tw("text-sm font-medium leading-none", props.className)} {...props} />
    ),
    svg: props => <svg className={tw("inline", props.className)} {...props} />,
    img: props => (
        <img
            alt="[missing alt]"
            {...props}
            className={tw("my-8 w-full object-cover", props.className)}
        />
    ),
};
