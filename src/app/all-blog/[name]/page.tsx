import React from "react"
import BlogOverview from "./BlogOverview"
import { Metadata } from "next"
import { weblogData } from "@/app/types/props"
import { getBlogs } from "@/app/api/blogs/getBlog"

export async function generateMetadata({
  params,
}: {
  params: { name: string }
}): Promise<Metadata> {
  const { name } = params

  return {
    title: `weblog | ${name.replaceAll("-", " ")}`,
    description: `weblog ${name}`,
  }
}

const Page = async ({ params }: { params: { name: string } }) => {
  const { name } = params
  const { blogs } = await getBlogs()

  const filteredData = blogs.filter(
    (item: weblogData) =>
      item.title.trim().replace(/[^\w]/gi, "-").replaceAll(" ", "-") === name
  )

  return (
    <section className="w-full h-[90vh] flex flex-col gap-5 items-center py-8 px-10 lg:px-0">
      {/* <UserInfo data={filteredData} /> */}
      <BlogOverview data={filteredData} />
    </section>
  )
}

export default Page