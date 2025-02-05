import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    apiVersion: process.env.SANITY_API_VERSION,
    useCdn: true,
    perspective: "raw",
});
