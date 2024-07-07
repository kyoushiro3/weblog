"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./button"
import { FiEdit3 } from "react-icons/fi"

const WriteBlogButton = () =>{
    const {status} = useSession()


    return(
        <div>
             <Link href="/addBlog"/>
              <Button
                variant= "outline"
                disabled={status === "authenticated" ? false : true}
                className="border-2 border-border"
              >
                Create a post  <FiEdit3 className="ml-2" />
              </Button>
        </div>
    )
}

export default WriteBlogButton