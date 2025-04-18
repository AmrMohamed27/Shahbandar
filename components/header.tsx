import {
  signInWithCredentials,
  signOut,
  signUpWithCredentials,
} from "@/actions/auth";
import SignInWithGoogle from "./sign-in-with-google";
import { Button } from "./ui/button";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  console.log(session, user);
  return (
    <div className="flex flex-row justify-between items-center mx-auto p-4 container">
      {/* Logo */}
      <Link href="/">Shahbandar</Link>
      {/* Auth Buttons */}
      <div className="flex flex-row items-center gap-4">
        {user ? (
          <Button onClick={signOut}>Log Out</Button>
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
