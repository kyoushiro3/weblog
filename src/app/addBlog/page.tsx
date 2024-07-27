import { Metadata } from "next";
import InputFields from "./InputFileds";

export const metadata: Metadata = {
  title: "write | new story",
  description: "add a new blog to the website",
}

export default function AddBlog() {

  return (
    <div className="max-w-2xl mx-auto p-4">
    <InputFields />
  </div>
  );
}
