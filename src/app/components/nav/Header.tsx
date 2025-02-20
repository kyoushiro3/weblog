"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import WriteBlogButton from "../ui/WriteBlogButton";
import ThemeSwitcher from "../ThemeSwitcher";
import { useTheme } from "next-themes";
import LoginDropDown from "./Login-dropdown";

export default function Header() {
  const { data: session, status } = useSession();

  const { theme } = useTheme();

  return (
    <header className="relative px-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 px-2">
      <Link className="flex items-center justify-center" href={"/"}>
        <div className="flex items-center gap-4 sm:gap-5">
            {theme === "dark" ? (
              <svg
                version="1.1"
                viewBox="0 0 2048 1793"
                width={100}
                height={100}
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px]"
              >
                <path
                  transform="translate(0)"
                  d="m0 0h2048v1793h-2048z"
                  fill="#0000"
                />
                <path
                  transform="translate(993,205)"
                  d="m0 0h32l46 3 38 4 38 6 30 6 32 8 40 12 34 12 27 11 29 13 30 15 46 26 19 12 21 14 14 10 26 20 11 9 13 11 10 9 8 7 26 24 12 12 7 8 9 9 7 8 11 13 15 20 16 21 11 16 13 20 13 21 15 27 14 27 14 30 13 32 10 28 12 40 8 32 8 41 5 37 3 36 1 17v72l-3 51-5 43-6 35-10 42-8 27-10 28-13 30-12 23-13 21-10 15-11 13-7 8-8 8-13 10-19 11-13 5-13 3h-19l-21-4-13-5-23-13-15-11-16-13-16-15-14-15-11-14-13-16-14-19-11-16-18-27-13-21-17-29-10-17-12-23-10-19-14-27-18-36-13-28-16-35-17-39-11-26-20-49-22-55-16-42-13-35-20-54-15-42-30-86-24-72-11-35-22-71-15-49-17-56-6-22-6-25-2-9-5 12-9 34-10 34-14 47-14 46-18 57-11 35-12 36-12 35-12 36-13 38-17 48-20 55-19 51-15 39-11 27-11 28-18 44-16 37-9 20-24 54-8 16-17 35-16 32-12 21-7 14-9 16-15 26-12 20-14 22-10 15-10 14-14 19-8 10-11 13-9 11-10 10-7 8-8 7-10 9-16 12-21 13-15 7-19 6-5 1h-16l-19-3-14-5-14-8-13-10-10-9-9-9-8-10-11-15-10-16-12-21-13-26-11-27-12-36-10-40-7-41-6-47-2-26-1-21v-61l2-34 6-57 4-26 9-41 10-36 12-36 13-34 16-36 17-34 13-23 10-17 11-16 18-27 12-16 13-16 9-12 14-17 11-12 9-10 18-18 8-7 14-13 11-9 11-10 11-9 12-10 20-15 17-12 18-12 24-15 41-23 25-13 20-9 27-11 30-11 31-10 41-11 52-11 39-6 41-4z"
                  fill="#ffff"
                />
                <path
                  transform="translate(981,1157)"
                  d="m0 0h57l36 4 29 6 29 9 26 11 21 10 27 16 17 12 13 10 14 12 10 9 22 22 11 14 10 14 11 17 12 21 10 21 10 26 9 31 6 31 2 16 1 28-2 22-4 19-7 19-8 16-9 14-13 15-13 13-8 7-18 13-21 13-29 14-26 10-27 9-40 10-27 5-36 5-42 3h-38l-37-2-35-4-41-7-40-10-33-11-30-13-19-10-20-12-21-16-12-11-11-11-13-17-10-16-10-25-4-19-1-9v-29l2-22 5-28 8-32 8-23 11-24 10-19 6-11 10-15 24-32 7-7 7-8 11-11 11-9 12-10 17-12 15-10 22-13 27-13 34-12 32-8 23-4z"
                  fill="#ffff"
                />
              </svg>
            ) : (
              <svg
                version="1.1"
                viewBox="0 0 2048 1793"
                width={100}
                height={100}
                xmlns="http://www.w3.org/2000/svg"
                className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] xl:w-[50px] xl:h-[50px]"
              >
                <path
                  transform="translate(0)"
                  d="m0 0h2048v1793h-2048z"
                  fill="#fff"
                />
                <path
                  transform="translate(993,205)"
                  d="m0 0h32l46 3 38 4 38 6 30 6 32 8 40 12 34 12 27 11 29 13 30 15 46 26 19 12 21 14 14 10 26 20 11 9 13 11 10 9 8 7 26 24 12 12 7 8 9 9 7 8 11 13 15 20 16 21 11 16 13 20 13 21 15 27 14 27 14 30 13 32 10 28 12 40 8 32 8 41 5 37 3 36 1 17v72l-3 51-5 43-6 35-10 42-8 27-10 28-13 30-12 23-13 21-10 15-11 13-7 8-8 8-13 10-19 11-13 5-13 3h-19l-21-4-13-5-23-13-15-11-16-13-16-15-14-15-11-14-13-16-14-19-11-16-18-27-13-21-17-29-10-17-12-23-10-19-14-27-18-36-13-28-16-35-17-39-11-26-20-49-22-55-16-42-13-35-20-54-15-42-30-86-24-72-11-35-22-71-15-49-17-56-6-22-6-25-2-9-5 12-9 34-10 34-14 47-14 46-18 57-11 35-12 36-12 35-12 36-13 38-17 48-20 55-19 51-15 39-11 27-11 28-18 44-16 37-9 20-24 54-8 16-17 35-16 32-12 21-7 14-9 16-15 26-12 20-14 22-10 15-10 14-14 19-8 10-11 13-9 11-10 10-7 8-8 7-10 9-16 12-21 13-15 7-19 6-5 1h-16l-19-3-14-5-14-8-13-10-10-9-9-9-8-10-11-15-10-16-12-21-13-26-11-27-12-36-10-40-7-41-6-47-2-26-1-21v-61l2-34 6-57 4-26 9-41 10-36 12-36 13-34 16-36 17-34 13-23 10-17 11-16 18-27 12-16 13-16 9-12 14-17 11-12 9-10 18-18 8-7 14-13 11-9 11-10 11-9 12-10 20-15 17-12 18-12 24-15 41-23 25-13 20-9 27-11 30-11 31-10 41-11 52-11 39-6 41-4z"
                  fill="#000000"
                />
                <path
                  transform="translate(981,1157)"
                  d="m0 0h57l36 4 29 6 29 9 26 11 21 10 27 16 17 12 13 10 14 12 10 9 22 22 11 14 10 14 11 17 12 21 10 21 10 26 9 31 6 31 2 16 1 28-2 22-4 19-7 19-8 16-9 14-13 15-13 13-8 7-18 13-21 13-29 14-26 10-27 9-40 10-27 5-36 5-42 3h-38l-37-2-35-4-41-7-40-10-33-11-30-13-19-10-20-12-21-16-12-11-11-11-13-17-10-16-10-25-4-19-1-9v-29l2-22 5-28 8-32 8-23 11-24 10-19 6-11 10-15 24-32 7-7 7-8 11-11 11-9 12-10 17-12 15-10 22-13 27-13 34-12 32-8 23-4z"
                  fill="#000000"
                />
              </svg>
            )}
          <h1 className="font-lora font-bold text-3xl hidden sm:block">
            write
          </h1>
        </div>
        </Link>
        <div className="flex items-center gap-4 sm:gap-5">
        {status === "authenticated"
              ?  <WriteBlogButton />
              : ""}
          <ThemeSwitcher />
          <LoginDropDown/>
          
        </div>
      </nav>
    </header>
  );
}
