import { tw } from "~/lib/utility";

export const Skeleton = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div className={tw("animate-pulse rounded-md bg-muted opacity-10", className)} {...props} />
    );
};
