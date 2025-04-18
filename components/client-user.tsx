"use client";

import { authClient } from "@/lib/auth-client";

const ClientUser = () => {
  const { data: session } = authClient.useSession();
  console.log("Session data:", session);
  return <div>Hey, {session?.user.email}</div>;
};

export default ClientUser;
