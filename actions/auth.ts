"use server";

import { auth } from "@/lib/auth";
import { env } from "@/lib/env";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWithCredentials = async () => {
  const response = await auth.api.signInEmail({
    body: {
      email: "amr@gm.com",
      password: "password",
      callbackURL: env.ORIGIN_URL,
    },
  });
  if (!response.url) {
    throw new Error("No URL found in response");
  }
  return redirect(response.url);
};

export const signUpWithCredentials = async () => {
  const response = await auth.api.signUpEmail({
    body: {
      email: "amr@gm.com",
      password: "password",
      name: "Amr",
    },
  });
  return response;
};
export const signOut = async () => {
  const response = await auth.api.signOut({
    headers: await headers(),
    asResponse: true,
  });
  return response;
};
