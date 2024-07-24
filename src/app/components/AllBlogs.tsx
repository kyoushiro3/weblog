import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getBlogs = async() =>{
  try{
    const res = await fetch("http://localhost:3000/api/blogs", {
      cache: "no-store"
    })
    if(!res.ok){
      throw new Error("Failed to fetch blogs.")
  }
  return res.json();

  }
  catch(error){
    console.log("Error loadings blogs: ",error)
  }
}

export default async function AllBlogs() {

  const { blogs } = await getBlogs();

  return (
    <main className="w-full flex py-4 p-6 items-center h-[90vh] flex-col gap-5">
      {blogs.map((blog: any) => (
      <div key={blog._id} className="w-full lg:w-1/2 space-y-2 rounded-lg p-4 relative group hover:shadow-xl transition-all duration-300 hover:bg-gray-300/10 dark:hover:border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold line-clamp-1"> {blog.title}</h2>
            <div className="line-clamp-2 opacity-70 text-sm mt-2">
              {blog.description}
            </div>
          </div>
          <div className="flex gap-2 mt-2">
            <RemoveBtn id={blog._id}/>
            <Link href={`/editBlog/${blog._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      </div>
      ))}
    </main>
  );
}
