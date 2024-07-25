"use client";

import { useSearchStore } from "@/app/store/mainStore";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Filter = () => {
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);

  return (
    <section className="w-full flex flex-col md:flex-row gap-3 justify-center sticky top-4">
      <Input
        type="search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      <div className="flex gap-3">
        <Button variant="outline">Today</Button>
        <Button variant="outline">Tomorrow</Button>
      </div>
    </section>
  );
};

export default Filter;
