"use client";
import { useState } from "react";

import React from "react";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "@/components/ui/button";

function StoryWriter() {
  const [story, setStory] = useState<string>("");
  const [pages, setPages] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const [generatedStory, setGeneratedStory] = useState<string | null>(null);
  const [progress, setProgress] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCompleted, setIsCompleted] = useState<boolean | null>(null);
  const [currentTool, setCurrentTool] = useState<string>("");

  async function runScript(){
   
  }

  return (
    <div className="flex flex-col container">
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md shadow-lg p-10 pb-5 sm:pb-10 space-y-2 bg-gradient-to-br from-purple-50 to-white text-gray-900">
        <Textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          rows={5}
          placeholder=" write a story about a robot and a human who became friends ..... "
          className="flex-1 border-gray-300 text-black font-bold p-5 rounded-md shadow-sm focus:ring focus:ring-purple-200"
        />
        <Select onValueChange={(value) => setPages(parseInt(value))}>
          <SelectTrigger className="w-full text-gray-800 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-purple-200 p-5 font-bold">
            <SelectValue placeholder="How many Pages you want ?" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem
                key={i}
                value={(i + 1).toString()}
                className="text-gray-800"
              >
                {i + 1}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button
          disabled={!story || !pages || isGenerating}
          onClick = {runScript}
          className=" bg-black text-white hover:bg-purple-900 transition duration-200 rounded-md py-2 mt-4 flex items-center justify-center  p-2" size="lg"
        >
          <span>Generate Story</span>
        </Button>
      </section>

      <section className="flex pb-5 mt-5">
        <div className="flex flex-col-reverse w-full spac-y-2 bg-gray-800 rounded-md text-gray-200 font-mono p-10 h-96 overflow-y-auto">
          <div>
            {isCompleted === null && (
              <>
                <p className="animate-pulse mr-5">
                  Im waiting for you to Generate a story above..
                </p>
                <br />
              </>
            )}
            <span className="mr-5">{">>"}</span>
            {progress}
          </div>
          {/* {generatedStory && (
            <div className="flex flex-col">
              <span className="mr-5">{"----[Generated Story] ---"}</span>
              <p>{generatedStory}</p>
            </div>
          )} */}

          {/* Current tool */}
          {currentTool && (
            <div className="py-10">
              <span className="mr-5 ">{"----[current Tool] ---"}</span>
              {currentTool}
            </div>
          )}

          {/* Render Events */}
          {isGenerating && (
            <div className="flex items-center justify-center">
              <span className="mr-5">{"----[Generating] ---"}</span>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default StoryWriter;
