import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { env } from "@/lib/env";

// For usage in server components and API routes
const connectionString = env.DATABASE_URL;

const client = postgres(connectionString);
export const db = drizzle(client, { schema });
