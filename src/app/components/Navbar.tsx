"use client";
import Link from "next/link";
import WriteBlogButton from "./ui/WriteBlogButton";
import { signIn, signOut, useSession } from "next-auth/react";
import Header from "./nav/Header";

export default function Navbar() {
  const { data: session, status } = useSession();

  return (
    <main className="w-full p-2 border-b border-border">
      <nav className="flex justify-around items-center">
        <h1 className="font-bold tracking-wide">
          <Link className="flex gap-2 items-center justify-center" href={"/"}>
            Weblog
          </Link>
        </h1>

        <WriteBlogButton />
        <Header />
        {/* <Link className="flex gap-3 items-center" href={"/addBlog"}>
          Add Blog
        </Link>  */}
        {/* <p>Not signed in</p>
      <button onClick={() => signIn("google", { prompt: "select_account" })}>
        Sign in with Google
      </button> */}
        {/* if (status === "authenticated" && session)
        {<p>Signed in as {session.user?.email}</p>}
        <a href="/api/auth/signin">Sign in</a>
        /* <button onClick={() => signOut("google")}>Sign out</button> */}
      </nav>
    </main>
  );
}
