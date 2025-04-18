"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signInWithGoogle = async () => {
  const response = await auth.api.signInSocial({
    body: {
      provider: "google",
      callbackURL: "http://localhost:3000",
    },
  });
  if (!response.url) {
    throw new Error("No URL found in response");
  }
  redirect(response.url);
};

export const signInWithCredentials = async () => {
  const response = await auth.api.signInEmail({
    body: {
      email: "amr@gm.com",
      password: "password",
      callbackURL: "http://localhost:3000",
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
