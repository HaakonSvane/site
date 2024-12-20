import { Card } from "../Card";
import { Skeleton } from "../Skeleton";

export const SiteItemCardSkeleton = () => {
    return (
        <Card className="border-muted">
            <Card.Header>
                <Skeleton className="h-7 w-[10%]" />
            </Card.Header>
            <Card.Content>
                <Card.ContentRow>
                    <Skeleton className="w-12 h-12" />
                    <Card.Description className="w-full flex flex-col gap-2">
                        <Skeleton className="h-4 w-[100%]" />
                        <Skeleton className="h-4 w-[62%]" />
                    </Card.Description>
                </Card.ContentRow>
            </Card.Content>
        </Card>
    );
};
