"use client";
import { signInWithCredentials, signUpWithCredentials } from "@/actions/auth";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import SignInWithGoogle from "./sign-in-with-google";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const { useSession } = createAuthClient();

const Header = () => {
  const { data, isPending, refetch } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  // Only render auth-dependent UI after client-side hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex flex-row justify-between items-center mx-auto p-4 container">
      {/* Logo */}
      <Link href="/">Shahbandar</Link>

      {/* Auth Buttons */}
      <div className="flex flex-row items-center gap-4">
        {!isClient ? (
          // Show a placeholder during server render and initial hydration
          <Skeleton className="w-20 h-9" />
        ) : isPending ? (
          <Skeleton className="bg-muted-foreground w-20 h-9" />
        ) : data?.user ? (
          // Log Out Button
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
            {/* Sign In Buttons */}
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
