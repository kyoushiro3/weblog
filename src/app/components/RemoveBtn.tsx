'use client'

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveBtnProps {
  id: string;
}

export default function RemoveBtn({ id }: RemoveBtnProps) {
  const router = useRouter();

  const removeBlog = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`https://weblog-kimdarren.vercel.app/api/blogs?id=${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete blog.");
      }
    }
  };

  return (
    <button onClick={removeBlog} className="text-red-400">
      <HiOutlineTrash size={24} />
    </button>
  );
}
