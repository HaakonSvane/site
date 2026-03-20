import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeMathjax from "rehype-mathjax";
import rehypeRaw from "rehype-raw";
import { visit } from "unist-util-visit";
import type { Root } from "mdast";

function remarkNormalizeHtmlAttrs() {
    return (tree: Root) => {
        visit(tree, "html", node => {
            node.value = node.value.replace(/\bclassName=/g, "class=");
        });
    };
}

export const remarkPlugins = [remarkGfm, remarkMath, remarkNormalizeHtmlAttrs];
export const rehypePlugins = [rehypeRaw, rehypeHighlight, rehypeMathjax];
