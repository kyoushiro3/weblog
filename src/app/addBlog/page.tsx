import { useState } from "react";
import { Input } from "../components/ui/input";
import { useRouter } from "next/navigation";
import { Metadata } from "next";
import InputFields from "./InputFileds";

export const metadata: Metadata = {
  title: "write | Add Blog",
  description: "Add a new blog to the website",
}

export default function AddBlog() {

  return (
    <div className="max-w-2xl mx-auto p-4">
    <InputFields />
  </div>
  );
}
