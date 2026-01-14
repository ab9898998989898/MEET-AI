"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export const HomeView = () => {
  const { data: session } = authClient.useSession();

  if (!session) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col p-4 gap-y-4">
      <h1>Hey there, {session?.user?.name}</h1>
      <Button
        onClick={() =>
          authClient.signOut({
            fetchOptions: { onSuccess: () => redirect("/sign-in") },
          })
        }
      >
        Sign out
      </Button>
    </div>
  );
};
