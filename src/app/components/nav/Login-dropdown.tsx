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
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function LoginDropDown() {
  const { data: session, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <DropdownMenu>
          <DropdownMenuTrigger>
          <Avatar className="cursor-pointer">
                <AvatarImage
                  src={session?.user?.image || ''}
                  alt="user profile picture"
                />
              </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuPortal>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => signOut()} className="flex justify-between">
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
              <DropdownMenuItem onClick={() => signIn("github")} className="flex justify-between">
                <ImGithub size={20} className="mr-2" />
                Continue with Github
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => signIn("google")} className="flex justify-between">
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
