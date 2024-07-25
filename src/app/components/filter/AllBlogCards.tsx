"use client";
import { useState} from "react";
import { weblogData } from "@/app/types/props";
import BlogCard from "./BlogCard";
import { useSearchStore } from "@/app/store/mainStore";


const AllBlogCards = ({ blogs }: { blogs: weblogData[] }) => {
  const search = useSearchStore((state) => state.search)
  const [data, setData] = useState(blogs)


  return (
    <>
      {data
        .filter((item: any) => {
          if (search === "") {
            return item
          } else if (item.title.toLowerCase().includes(search.toLowerCase())) {
            return item
          }
        })
        .map((item: weblogData, index: React.Key | null | undefined) => {
          return (
            <div
              key={index}
              className="grid place-items-center flex-col w-full gap-3 mt-2"
            >
              <BlogCard data={item} />
            </div>
          )
        })}
    </>
  )
}

export default AllBlogCards;
