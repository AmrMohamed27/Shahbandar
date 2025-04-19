"use client";

import { authClient } from "@/lib/auth-client";
import { useTranslations } from "next-intl";

const ClientUser = () => {
  const { data: session } = authClient.useSession();
  const t = useTranslations("HomePage");
  return (
    <div className="h-[5000px]">
      {t("title")}, {session?.user.name}
    </div>
  );
};

export default ClientUser;
