import React from "react";
import { Skeleton } from "./ui/skeleton";
import { Button } from "./ui/button";
import { authClient } from "@/lib/auth-client";
import SignInWithGoogle from "./sign-in-with-google";
import { signInWithCredentials, signUpWithCredentials } from "@/actions/auth";
import { useRouter } from "@/i18n/navigation";
import { createAuthClient } from "better-auth/react";

const { useSession } = createAuthClient();

interface Props {
  isClient: boolean;
}

const AuthButtons = ({ isClient }: Props) => {
  const router = useRouter();
  const { data, isPending, refetch } = useSession();
  return (
    <div className="lg:flex-row flex-col lg:items-center gap-4 max-lg:w-full *:max-lg:w-full">
      {!isClient || isPending ? (
        <Skeleton className="w-full lg:w-20 h-9" />
      ) : data?.user ? (
        <Button
          className="bg-primary-green-400"
          onClick={async () => {
            await authClient.signOut({
              fetchOptions: {
                onSuccess: () => {
                  router.push("/");
                  refetch();
                },
              },
            });
          }}
        >
          Log Out
        </Button>
      ) : (
        <div className="flex flex-col gap-4 max-lg:w-full">
          <SignInWithGoogle />
          <Button onClick={signInWithCredentials}>
            Sign In with Credentials
          </Button>
          <Button onClick={signUpWithCredentials}>
            Sign Up with Credentials
          </Button>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
