import { Card } from "../Card";

type SiteItemCardProps = {
    title: string;
    slug: string;
    leadImage?: {
        title?: string;
        url: string;
    };
    description: string;
};

export const SiteItemCard = ({ title, slug, leadImage, description }: SiteItemCardProps) => {
    return (
        <Card.Link to={slug}>
            <Card.Header>
                <Card.Title>{title}</Card.Title>
            </Card.Header>
            <Card.Content>
                <Card.ContentRow>
                    {leadImage?.url && (
                        <img
                            src={leadImage.url}
                            alt={leadImage.title ?? "Post image"}
                            className="w-12 h-12"
                        />
                    )}
                    <Card.Description className="text-card-foreground">
                        {description}
                    </Card.Description>
                </Card.ContentRow>
            </Card.Content>
        </Card.Link>
    );
};
