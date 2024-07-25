import { getBlogs } from "@/app/api/blogs/getBlog"
import EditBlogForm from "@/app/components/EditBlogForm"
import { weblogData } from "@/app/types/props"

const Page = async ({ params }: { params: { id: string } }) => {
  const { id } = params

  const { blogs } = await getBlogs()

  const { title, description, category } = blogs.find(
    (blog: weblogData) => blog._id === id
  )
  
  return (
    <main className="w-full min-h-[90vh] py-6 max-h-full flex justify-center items-center flex-col gap-5 px-8">
      <hr className="w-full lg:w-1/2 border dark:border-white/20" />
      <div className="w-full lg:w-1/2 px-6 md:px-10">
        <EditBlogForm
          title={title}
          description={description}
          category={category}
          id={id}
        />
      </div>
    </main>
  )
}

export default Page