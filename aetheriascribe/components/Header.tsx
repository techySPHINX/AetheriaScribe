import React from "react";
import Link from "next/link";
import { BookOpen, FilePen, Home } from "lucide-react";

function Header() {
  return (
    <header className="relative p-16 text-center">
      <Link href="/">
        <h1 className="text-6xl font-black">StoryTeller AI</h1>
        <div className="flex justify-center whitespace-nowrap space-x-5 text-3xl lg:text-5xl">
          <h2>Bringing your stories</h2>
          <div className="relative">
            <div className="absolute bg-gradient-to-r from-purple-500 to-indigo-500 -left-2 -top-1 -bottom-1 -right-2 md:-left-3 md:-top-0 md:-bottom-0 md:-right-3 -rotate-1 shadow-lg" />
            <p className="relative text-white z-10 font-semibold">To life!</p>
          </div>
        </div>
      </Link>

      <div className="absolute top-5 right-5 flex space-x-4">
        <Link href="/">
          <FilePen className="w-6 h-6 text-gray-600 hover:text-indigo-500 transition duration-200" />
        </Link>
        <Link href="/stories">
          <BookOpen className="w-6 h-6 text-gray-600 hover:text-purple-500 transition duration-200" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
