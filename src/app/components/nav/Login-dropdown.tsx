"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuPortal,
} from "../ui/drop-down";
import { ImGithub, ImGoogle3 } from "react-icons/im";
import { AiFillGoogleCircle } from "react-icons/ai";
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

export default function LoginDropDown() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar className="cursor-pointer">
              <AvatarImage
                src={session?.user?.image || ""}
                alt="user profile picture"
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <div className="mr-2">
                  {session?.user?.image?.split("/")[2] ===
                  "lh3.googleusercontent.com" ? (
                    <AiFillGoogleCircle size={30} />
                  ) : (
                    <ImGithub size={25} />
                  )}
                </div>
                <div className="flex flex-col justify-center items-start">
                  <h1 className="capitalize text-xs font-semibold">
                    {session?.user?.name}
                  </h1>
                  <p className="text-xs opacity-60">{session?.user?.email}</p>
                </div>
              </DropdownMenuItem>
              <Link
                href={`/blogs/${session?.user?.name
                  ?.trim()
                  .replace(/[^\w]/gi, "-")
                  .replaceAll(" ", "-")
                  .toLowerCase()}`}
              >
              <DropdownMenuItem>
My blogs
              </DropdownMenuItem>
              </Link>
              <DropdownMenuItem
                onClick={() => signOut()}
                className="flex justify-between"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      ) : (
        <DropdownMenu>
          <DropdownMenuTrigger className="border-radius rounded-full bg-black text-white text-sm px-5 py-2 dark:bg-white dark:text-black">
            Get started
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              <DropdownMenuItem
                onClick={() => signIn("github")}
                className="flex justify-between"
              >
                <ImGithub size={20} className="mr-2" />
                Continue with Github
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => signIn("google")}
                className="flex justify-between"
              >
                <ImGoogle3 size={20} className="mr-2" />
                Continue with Google
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenuPortal>
        </DropdownMenu>
      )}
    </div>
  );
}
