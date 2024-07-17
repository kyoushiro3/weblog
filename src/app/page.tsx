import Link from "next/link";
import "./globals.css";
import { Lora } from "next/font/google";

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
})

export default function Home() {
  
  return(
    <main className="px-4 sm:px-6">
      <section className="mx-auto max-w-7xl py-16 px-2 lg:py-24">
      <div className="w-full flex flex-col gap-4">
        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-raleway tracking-wide mb-5 sm:mb-4">Human 
          <br className="mb-5"/>stories & ideas</h1>
        <p className="text-base opacity-80 dark:opacity-50 font-raleway">a place to read, write, and deepen your understanding.</p>
        <div className="flex gap-3 mt-4">
          <button className="border-radius bg-black/90 hover:bg-black rounded-full text-white text-sm px-10 py-2 dark:text-black dark:bg-white"><Link href="/"></Link>Start reading</button>
          </div>
      </div>
      </section>
    </main>
  )
}
