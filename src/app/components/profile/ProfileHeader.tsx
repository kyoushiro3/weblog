"use client";

import { weblogData } from "@/app/types/props";
import { Avatar } from "@nextui-org/react";
import { AvatarImage } from "../ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

const ProfileHeader = ({ data }: {data: weblogData[]| any}) => {
  const { user, email, img } = data[0] || data;

  return (
    <section className="w-full lg:w-1/2 flex justify-center flex-row gap-3 items-start mt-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={img || ""} alt="user profile" />
        <AvatarFallback>
          {user && user.slice(0, 2).toUpperCase()}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col items-start gap-4">
        <h1 className="capitalize text-xl font-semibold">{user}</h1>
        <p className="text-xs opacity-60">{email}</p>
      </div>
    </section>
  );
};

export default ProfileHeader
