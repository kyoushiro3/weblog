"use client";
import { useState, useEffect } from "react";
import { create } from "zustand";
import { weblogData } from "@/app/types/props";
import { SearchProps, SettingsProps } from "@/app/types/props";
import BlogCard from "./BlogCard";


// Search store
const useSearchStore = create<SearchProps>((set) => ({
  search: "",
  setSearch: (search: string) => set({ search }),
}));

// Settings store
const useSettings = create<SettingsProps>((set) => ({
  isLoading: false,
  setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));

const AllBlogCards = ({ blogs }: { blogs: weblogData[] }) => {
  const [data, setData] = useState<weblogData[]>(blogs);
  const search = useSearchStore((state) => state.search);

  useEffect(() => {
    if (search === "") {
      setData(blogs);
    } else {
      setData(
        blogs.filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, blogs]);

  return (
    <div>
      {data.map((item) => (
        <div key={item._id} className="grid place-items-center flex-col w-full gap-3">
          <BlogCard data={item} />
        </div>
      ))}
    </div>
  );
};

export default AllBlogCards;
