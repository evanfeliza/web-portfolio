
import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET ,
    apiVersion: process.env.SANITY_API_VERSION , 
    useCdn: false, 
};

const client = createClient(config);

export default client;  