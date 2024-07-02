"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../components/ui/input";

const EditBlogForm = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [newTitle, setNewTitle] = useState<string>(title || "");
  const [newDescription, setNewDescription] = useState<string>(description || "");
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`http://localhost:3000/api/blogs/${id}/`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title: newTitle, description: newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update blog.");
      }

      setLoading(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Error updating blog:", error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input
        type="text"
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        placeholder="Title"
        className="border border-gray-300 p-2 rounded"
      />
      <Input
        type="text"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Description"
        className="border border-gray-300 p-2 rounded"
      />
      <button
        type="submit"
        className={`bg-green-600 font-bold text-white py-3 px-3 w-fit rounded ${
          loading ? "opacity-50" : ""
        }`}
        disabled={loading}
      >
        {loading ? "Updating..." : "Update Blog"}
      </button>
    </form>
  );
};

export default EditBlogForm;
