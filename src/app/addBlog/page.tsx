"use client";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { useRouter } from "next/navigation";

export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmit = async (e:any) => {
    e.preventDefault();

    if(!title || !description){
        alert("Title and description are required.")
        return;
    }

    try {
        const res = await fetch('http://localhost:3000/api/blogs', {
            method:"POST",
            headers:{
                "Content-type":"applcation/json",
            },
            body: JSON.stringify({title, description})
        })

        if(res.ok){
           router.push('/'); 
        }
        else{
            throw new Error("Failed to create blog.")
        }
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <Input type="text" onChange={(e) => setTitle(e.target.value)} id="title" placeholder="Title" />

      <Input type="text" onChange={(e) => setDescription(e.target.value)} id="description" placeholder="Description" />

      <button className="bg-green-600 font-bold text-white py-3 px-3 w-fit">
        Add Blog
      </button>
    </form>
  );
}
