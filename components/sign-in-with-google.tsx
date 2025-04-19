"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { env } from "@/lib/env";

const SignInWithGoogle = () => {
  return (
    <Button
      className="bg-primary-green hover:bg-primary-green-600"
      variant={"outline"}
      onClick={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: env.NEXT_PUBLIC_ORIGIN_URL,
        });
      }}
    >
      Sign In With Google
    </Button>
  );
};

export default SignInWithGoogle;
