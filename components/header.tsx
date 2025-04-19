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
import { DarkModeToggle } from "./dark-mode-toggle";
import ChangeLanguage from "./change-language";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const { useSession } = createAuthClient();

const Header = () => {
  const { data, isPending, refetch } = useSession();
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const scrollThreshold = 300;

      if (window.scrollY > scrollThreshold && !scrolledPast) {
        setScrolledPast(true);
      } else if (window.scrollY <= scrollThreshold && scrolledPast) {
        setScrolledPast(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolledPast]);

  return (
    <div className="h-16">
      {" "}
      {/* This creates space for the header */}
      <AnimatePresence>
        {/* When scrolledPast is true, show this fixed header */}
        {scrolledPast && (
          <motion.div
            className="top-0 right-0 left-0 z-50 fixed bg-background/95 shadow-md backdrop-blur-sm border-b-2 border-black"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="flex flex-row justify-between items-center mx-auto p-4 container">
              {/* Logo */}
              <Link href="/">Shahbandar</Link>

              {/* Buttons */}
              <div className="flex flex-row items-center gap-4">
                <DarkModeToggle />
                <ChangeLanguage />

                {!isClient ? (
                  <Skeleton className="w-20 h-9" />
                ) : isPending ? (
                  <Skeleton className="bg-muted-foreground w-20 h-9" />
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
          </motion.div>
        )}
      </AnimatePresence>
      {/* This is the initial absolute header that's always present when not scrolled */}
      <div
        className={cn(
          "absolute top-0 left-0 right-0 z-40",
          scrolledPast ? "opacity-0 pointer-events-none" : "opacity-100"
        )}
      >
        <div className="flex flex-row justify-between items-center mx-auto p-4 container">
          {/* Logo */}
          <Link href="/">Shahbandar</Link>

          {/* Buttons */}
          <div className="flex flex-row items-center gap-4">
            <DarkModeToggle />
            <ChangeLanguage />

            {!isClient ? (
              <Skeleton className="w-20 h-9" />
            ) : isPending ? (
              <Skeleton className="bg-muted-foreground w-20 h-9" />
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
      </div>
    </div>
  );
};

export default Header;
