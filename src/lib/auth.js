// ←←← PUT THIS AT THE VERY TOP, BEFORE ANY OTHER IMPORTS
import { setServers } from "node:dns/promises";

setServers(["1.1.1.1", "8.8.8.8"]);   // Cloudflare + Google DNS

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI);
const db = client.db("test");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    emailAndPassword: {
        enabled: true,
    },
});