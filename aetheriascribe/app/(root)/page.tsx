import Image from "next/image";
import Logo from "../public/logo.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import StoryWriter from "@/components/StoryWriter";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
        <div className="flex flex-col items-center justify-center  bg-gradient-to-r from-purple-500 to-indigo-500 text-white order-1 lg:-order-1 pb-10 space-y-5 rounded-md shadow-lg">
          <Image src={Logo} alt="Description" width={500} height={300} />
            <Button asChild className="bg-purple-800 text-white px-20 py-10 rounded hover:bg-purple-900 transition text-xl">
            <Link href="/stories">Explore Story Library</Link>
            </Button>
        </div>

        {/* storyWriter Component */}
        <StoryWriter />
      </section>
    </main>
  );
}
