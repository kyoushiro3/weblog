import { getBlogs } from "@/app/api/blogs/getBlog"
import BlogCard from "@/app/components/filter/BlogCard"
import ProfileHeader from "@/app/components/profile/ProfileHeader"
import { Button } from "@/app/components/ui/button"
import { weblogData } from "@/app/types/props"
import { Metadata } from "next"
import Link from "next/link"
import { FiEdit3 } from "react-icons/fi"

export async function generateMetadata({
    params,
  }: {
    params: { username: string }
  }): Promise<Metadata> {
    const { username } = params
  
    return {
      title: `weblog | ${username.replaceAll("-", " ")}`,
      description: `a story written by ${username}`,
    }
  }
  

  const Page = async ({ params }: { params: { username: string } }) => {
    const { username } = params
    const { blogs } =  await getBlogs()

  const filteredData = blogs.filter(
    (item: weblogData) =>
      item.user === "Kim Darren"
  )
    return(
      <main className="max-w-2xl mx-auto p-4">
            <ProfileHeader data={filteredData}/>
            <div className="flex justify-between flex-col gap-2 md:gap-0 md:flex-row w-full lg:w-1/2 items-center">
          <p>
            <span className="opacity-70">Number of Blogs written :</span>
            <span className="font-bold"> {filteredData.length}</span>
          </p>

          <Link href="/addBlog">
            <Button>
              write a story
              <FiEdit3 className="ml-2" />
            </Button>
          </Link>
        </div>

            {filteredData.map((item: weblogData, index: React.Key | null | undefined) => {
          return (
            <div
              key={index}
              className="grid place-items-center flex-col w-full gap-3 mt-2"
            >
              <BlogCard data={item}  />
            </div>
          )
        })}

        </main>
    )
}

export default Page