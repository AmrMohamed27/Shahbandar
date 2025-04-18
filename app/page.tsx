import ClientUser from "@/components/client-user";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) {
    console.log("Error fetching session", session);
    return (
      <div>
        Error fetching session
        <ClientUser />
      </div>
    );
  }
  const user = session.user;
  if (!user) {
    console.log("No user found in session");
    return <div>No user found in session</div>;
  }
  return <div>Hello there, {user.name}</div>;
}
