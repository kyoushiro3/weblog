import Link from "next/link";

export default function Navbar() {
  return (
    <main className="w-full p-2 border-b border-border">
      <nav className="flex justify-around items-center">
        <h1 className="font-bold tracking-wide">
            <Link className="flex gap-2 items-center justify-center" href={"/"}> 
          Weblog
        </Link>
        </h1>
        <Link className="flex gap-3 items-center" href={"/addBlog"}>
          Add Blog
        </Link>
      </nav>
    </main>
  );
}
