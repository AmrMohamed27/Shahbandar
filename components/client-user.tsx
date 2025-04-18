"use client";

import { authClient } from "@/lib/auth-client";

const ClientUser = () => {
  const { data: session } = authClient.useSession();
  return <div>Hey, {session?.user.name}</div>;
};

export default ClientUser;
