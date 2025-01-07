import { ClientPerspective, createClient } from "@sanity/client";
import { getEnvValue } from "~/lib/utility";

export const client = createClient({
    projectId: getEnvValue("SANITY_PROJECT_ID"),
    dataset: "production",
    apiVersion: getEnvValue("SANITY_API_VERSION"),
    useCdn: true,
    perspective: getEnvValue("SANITY_PERSPECTIVE") as ClientPerspective,
});
