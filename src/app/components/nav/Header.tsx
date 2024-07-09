import Link from "next/link";
import logo from "../public/blog-light.png"
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full p-2 border-b border-border">
      <nav className="flex justify-around items-center">
        <h1 className="font-bold tracking-wide">
        <Link className="flex gap-2 items-center justify-center" href={"/"}>
          <Image src="/public/blob-light.png" width={20} height={20} alt="logo"/> WeBlog
        </Link>
        </h1>
      </nav>
    </header>
  );
};

export default Header;
