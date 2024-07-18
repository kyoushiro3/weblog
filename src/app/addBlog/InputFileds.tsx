"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Label from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/text-area";
import Select from "react-select";
import { Button } from "../components/ui/button";
import { BiLoaderCircle } from "react-icons/bi";

// Define the interface for the blog data
export interface DBBlogData {
  _id?: string;
  title: string;
  description: string;
  category: string[];
  user: string;
  email: string;
  img: string;
  date?: string;
  time?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

const InputFields = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<{ label: string; value: string }[]>(
    []
  );
  const [error, setError] = useState<boolean>(false);
  const correctCategory: string[] = category.map((item) => item.label);
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const options = [
    { value: "Tech", label: "Tech" },
    { value: "Programming", label: "Programming" },
    { value: "Lifestyle", label: "Lifestyle" },
  ];

  const handleSelectChange = (selectedOption: any) => {
    setCategory(selectedOption)
  }

  const handleReset = () => {
    setTitle("");
    setDescription("");
    setCategory([]);
    setError(false);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (title === "" || description === "" || category.length === 0) {
      setError(true);
    } else {
      setIsLoading(true);
      setError(false);

      try {
        const res = await fetch("http://localhost:3000/api/blogs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            category: correctCategory,
            user: session?.user?.name || "Anonymous",
            email: session?.user?.email || "No email provided",
            img: session?.user?.image || "No image provided",
            date: new Date().toLocaleDateString(),
            time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          }),
        });

        if (res.ok) {
          setTitle("");
          setDescription("");
          setCategory([]);
          setIsLoading(false);
          router.push("/");
        } else {
          throw new Error("Failed to create blog.");
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  return (
    <main className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Input
          className="border-none text-2xl font-semibold focus-visible:ring-0"
            type="text"
            id="title"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {error && <p className="text-red-400 text-xs m-1">Required</p>}
        </div>

        <div>
          <Textarea 
            className="border-none focus-visible:ring-0 text-md"
            id="description"
            placeholder="Tell your story..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            autoFocus={true}
          />
          {error && (
            <p className="text-red-400 text-xs m-1">
              Minimum 100 words Required
            </p>
          )}
        </div>

        <div>
          <Label className="font-bold">Category</Label>
          <Select
            isMulti
            options={options}
            value={category}
            onChange={handleSelectChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <p className="m-1 text-xs text-black/50">
            Category is important to approach more audience
          </p>
          {error && (
            <p className="text-red-400 text-xs m-1">
              At least 1 Category Required
            </p>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" type="reset" onClick={handleReset}>
            Reset
          </Button>
          <Button className="w-32" role="submit" type="submit" variant="default" size="sm">
            {isLoading ? (
              <BiLoaderCircle size={20} className="animate-spin" />
            ) : (
              "Add Blog"
            )}
          </Button>
        </div>
      </form>
    </main>
  );
};

export default InputFields;

