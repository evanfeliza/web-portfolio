
import { createClient, type ClientConfig } from "@sanity/client";

const projectId = process.env.SANITY_PROJECT_ID 
const dataset = process.env.SANITY_DATASET 
const apiVersion = process.env.SANITY_API_VERSION

const config: ClientConfig = {
    projectId,
    dataset,
    apiVersion, 
    useCdn: false,
};

const client = createClient(config);

export default client;  