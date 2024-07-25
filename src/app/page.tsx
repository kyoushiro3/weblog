import Link from "next/link";
import "./globals.css";
import Footer from "./components/nav/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow px-4 sm:px-6">
        <section className="mx-auto max-w-7xl py-16 px-2 lg:py-20">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold font-rubik tracking-wide mb-5 sm:mb-4">
              Human
              <br className="mb-5" />
              stories & ideas
            </h1>
            <p className="text-base opacity-80 dark:opacity-50 font-rubik">
              a place to read, write, and deepen your understanding.
            </p>
            <div className="flex gap-3 mt-4">
              <button className="font-rubik border-radius bg-black hover:bg-black rounded-full text-white text-sm px-5 py-2 dark:text-black dark:bg-white sm:flex items-center">
                <Link href="/all-blog" className="font-rubik">Start reading</Link>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
