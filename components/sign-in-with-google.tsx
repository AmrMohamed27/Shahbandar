"use client";
import { Button } from "./ui/button";
import { signInWithGoogle } from "@/actions/auth";

const SignInWithGoogle = () => {
  return (
    <Button
      // onClick={async () => {
      //   await authClient.signIn.social({
      //     provider: "google",
      //     callbackURL: env.NEXT_PUBLIC_BETTER_AUTH_URL,
      //   });
      // }}
      onClick={signInWithGoogle}
    >
      Sign In With Google
    </Button>
  );
};

export default SignInWithGoogle;
