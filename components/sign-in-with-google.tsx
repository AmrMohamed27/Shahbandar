"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "./ui/button";
import { env } from "@/lib/env";
import { useTranslations } from "next-intl";

const SignInWithGoogle = () => {
  const t = useTranslations("Auth.Buttons");
  return (
    <Button
      className=""
      variant={"outline"}
      onClick={async () => {
        await authClient.signIn.social({
          provider: "google",
          callbackURL: env.NEXT_PUBLIC_ORIGIN_URL,
        });
      }}
    >
      {t("login")}
    </Button>
  );
};

export default SignInWithGoogle;
