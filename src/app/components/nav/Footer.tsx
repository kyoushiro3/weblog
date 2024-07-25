import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <div className="w-full overflow-hidden">
      <hr className="h-px w-full my-8 bg-black border-0 dark:bg-gray-700"/>
      <div className="w-full flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">Made by</p>
        <Link
          href="https://github.com/kyoushiro3"
          className="ml-2 underline underline-offset-2 text-sm"
          target="_blank"
        >
          Kim Darren
        </Link>
        <p className="text-gray-500 dark:text-gray-400 text-sm">.</p>
      </div>
    </div>
  )
}

export default Footer
