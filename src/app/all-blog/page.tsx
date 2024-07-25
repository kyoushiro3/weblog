import { getBlogs } from "../api/blogs/getBlog"
import AllBlogCards from "../components/filter/AllBlogCards"
import Filter from "../components/filter/Filter"
import { weblogData } from "../types/props"


const Page = async () =>{
  const { blogs } : {blogs:weblogData[]} = await getBlogs()

  return(
    <main className="max-w-2xl mx-auto p-4">

    <hr className="w-full lg:w-1/2" />
    <Filter/>
    <AllBlogCards blogs={blogs} />
  </main>
  )
}

export default Page