import { useRouter } from "@/i18n/navigation";
import { authClient } from "@/lib/auth-client";
import { createAuthClient } from "better-auth/react";
import SignInWithGoogle from "./sign-in-with-google";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";
import { useTranslations } from "next-intl";

const { useSession } = createAuthClient();

interface Props {
  isClient: boolean;
}

const AuthButtons = ({ isClient }: Props) => {
  const router = useRouter();
  const { data, isPending, refetch } = useSession();
  const t = useTranslations("Auth.Buttons");
  return (
    <div className="lg:flex-row flex-col lg:items-center gap-4 max-lg:w-full *:max-lg:w-full">
      {!isClient || isPending ? (
        <Skeleton className="w-full lg:w-20 h-9" />
      ) : data?.user ? (
        <Button
          className=""
          variant={"outline"}
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
          {t("logout")}
        </Button>
      ) : (
        <div className="flex flex-col gap-4 max-lg:w-full">
          <SignInWithGoogle />
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
