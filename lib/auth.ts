import { db } from "@/db";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { genericOAuthClient } from "better-auth/client/plugins";
import { nextCookies } from "better-auth/next-js";
import { oAuthProxy } from "better-auth/plugins";
import { env } from "./env";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  appName: "Shahbandar",
  secret: env.BETTER_AUTH_SECRET,
  // advanced: {
  //   crossSubDomainCookies: {
  //     enabled: true,
  //     domain: "." + env.ORIGIN_URL, // Domain with a leading period
  //   },
  //   defaultCookieAttributes: {
  //     secure: true,
  //     httpOnly: true,
  //     sameSite: "none", // Allows CORS-based cookie sharing across subdomains
  //     partitioned: true, // New browser standards will mandate this for foreign cookies
  //   },
  // },
  // trustedOrigins: [env.ORIGIN_URL],
  plugins: [nextCookies(), genericOAuthClient(), oAuthProxy()],
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
});
