"use client";

import { signIn, useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <div>
        <p>Signed in as {session.user?.image}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
// "google", { prompt: "select_account" }
  return (
    <div>
      <p>Not signed in</p>
      <button onClick={async() => signIn()}> 
        Sign in
      </button>
    </div>
  );
};

export default Header;
