"use client";
import { signInWithCredentials, signUpWithCredentials } from "@/actions/auth";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SignInWithGoogle from "./sign-in-with-google";
import { Button } from "./ui/button";
const { useSession } = createAuthClient();

const Header = () => {
  const { data, isPending, refetch } = useSession();
  const router = useRouter();
  const user = data?.user;
  return (
    <div className="flex flex-row justify-between items-center mx-auto p-4 container">
      {/* Logo */}
      <Link href="/">Shahbandar</Link>
      {/* Auth Buttons */}
      <div className="flex flex-row items-center gap-4">
        {isPending ? (
          <div>Loading...</div>
        ) : user ? (
          <Button
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
          <>
            <SignInWithGoogle />
            <Button onClick={signInWithCredentials}>
              Sign In with Credentials
            </Button>
            <Button onClick={signUpWithCredentials}>
              Sign Up with Credentials
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
