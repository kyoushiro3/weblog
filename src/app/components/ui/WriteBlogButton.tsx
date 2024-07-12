"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./button"
import { FiEdit3 } from "react-icons/fi"

const WriteBlogButton = () =>{
    const {status} = useSession()


    return(
        <div>
             <Link href="/addBlog">
              <Button
                variant= "default"
                disabled={status === "authenticated" ? false : true}
                className="border-radius bg-black hover:bg-black rounded-full text-white text-sm px-5 py-2 dark:text-black dark:bg-white"
              >
                Write  <FiEdit3 className="ml-2" />
              </Button>
              </Link>
        </div>
    )
}

export default WriteBlogButton