// import { getBlogs } from "@/app/api/blogs/getBlog";
// import EditBlogForm from "@/app/components/EditBlogForm";
// import { weblogData } from "@/app/types/props";

// const getById = async (id: string) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/blogs/${id}`, {
//       cache: 'no-store'
//     });

//     if (!res.ok) {
//       throw new Error("Failed to fetch blog.");
//     }

//     return await res.json();
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// };

// export default async function EditBlog({ params }: { params: { id: any} }){
//     const {id} = params
//     const{blog} = await getById(id)
//     const{title, description} = blog;

//     return (
//         <div className="max-w-2xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Edit Blog</h1>
//     <EditBlogForm title={title} description={description} id={id} />
//     </div>
//   );
// }

"use client"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import { BiLoaderCircle } from "react-icons/bi"
import Label from "@/app/components/ui/label"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/text-area"
import Select from "react-select";
import { Button } from "@/app/components/ui/button"

const EditBlog = ({
  title,
  description,
  category,
  id,
}: {
  title: string
  description: string
  category: string[]
  id: string
}) => {
  const [newTitle, setNewTitle] = useState<string>(title)
  const [newDescription, setNewDescription] = useState<string>(description)
  const [newCategory, setNewCategory] = useState<string[]>([])
  const [error, setError] = useState<boolean>(false)
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  const handleSelectChange = (selectedOption: any) => {
    setNewCategory(selectedOption)
  }

  const options = [
    { value: "Tech", label: "Tech" },
    { value: "Programming", label: "Programming" },
    { value: "Lifestyle", label: "Lifestyle" },
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true)

    e.preventDefault()
    if (!newTitle || !newDescription || newCategory.length === 0) {
      setError(true)
      setLoading(false)
      return
    }

    try {
      const res = await fetch(
        `http://localhost:3000/api/blogs/${id}/`,
        {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            newTitle,
            newDescription,
            newCategory,
            date: new Date().toLocaleDateString(),
            time: new Date().getHours() + ":" + new Date().getMinutes(),
          }),
        }
      )

      if (!res.ok) {
        throw new Error("Failed to update blog")
      }
      if(res.ok){
        setLoading(false)
        router.push(`/all-blog/${newTitle.trim().replace(/[^\w]/gi, "-")}`)
        router.refresh()
      } 
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  return (
    <main className="w-full">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          {error && <p className="text-red-400 text-xs m-1">Required</p>}
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Write your Blog here"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="min-h-[320px] max-h-full"
          />
          {error && (
            <p className="text-red-400 text-xs m-1">
              Minimum 100 words Required
            </p>
          )}
        </div>

        <div>
          <Label>Catogory</Label>
          <Select
            isMulti
            value={category}
            onChange={handleSelectChange}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <p className="m-1 text-xs text-black/50">
            Category is important to Approach more audience
          </p>
          {error && (
            <p className="text-red-400 text-xs m-1">
              Atleaset 1 Catogory Required
            </p>
          )}
        </div>

        <div className="flex gap-3 justify-end">
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <Button className="w-32" role="submit" type="submit">
            {loading ? (
              <BiLoaderCircle size={20} className="animate-spin" />
            ) : (
              "Update Blog"
            )}
          </Button>
        </div>
      </form>
    </main>
  )
}

export default EditBlog