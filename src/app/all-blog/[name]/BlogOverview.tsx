import { Badge } from "@/app/components/ui/badge"
import { weblogData } from "@/app/types/props"
import { Image } from "@nextui-org/react"
import React from "react"
import { IoMdImage } from "react-icons/io"

const BlogOverview = ({ data }: { data: weblogData[] }) => {
  const { time, date, title, description, category } = data[0] || data

  return (
    <section className="w-full lg:w-1/2 flex flex-col gap-3">
      <p className="text-xs opacity-80 md:hidden">
        {time} | {date}
      </p>
      <h1 className="text-3xl font-semibold">{title}</h1>

      <div className="flex gap-2 -mt-2">
        {category?.map((item, index) => {
          return (
            <div key={index}>
              <Badge variant="secondary" className="font-normal">
                # {item}
              </Badge>
            </div>
          )
        })}
      </div>

      <div className="w-full border-2 h-[300px] rounded-lg flex flex-col justify-center items-center">
        <IoMdImage size={50} className="opacity-10 dark:opacity-25" />
        <h1 className="opacity-30 text-center">
          Cover Photo
        </h1>
        {/* <Image src={"https://unsplash.com/photos/green-trees-under-white-clouds-DO8xdyjU3cY"} height={300} width={100} alt="Cover Photo"/> */}
        
      </div>

      <p className="opacity-80">{description}</p>
    </section>
  )
}

export default BlogOverview