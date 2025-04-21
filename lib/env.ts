import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
    ORIGIN_URL: z.string().url().min(1),
  },
  client: {
    NEXT_PUBLIC_ORIGIN_URL: z.string().url(),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    ORIGIN_URL: process.env.ORIGIN_URL,
    NEXT_PUBLIC_ORIGIN_URL: process.env.NEXT_PUBLIC_ORIGIN_URL,
  },
});
