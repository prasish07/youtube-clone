import { trpc } from "@/trpc/server";
import React from "react";

const Index = async () => {
  const data = await trpc.hello({ text: "world" });

  return (
    <>
      <section className="w-full bg-[#e8f0fb] py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 relative">
          {/* Left column */}
          <div className="flex-1 relative flex flex-col items-start">
            {/* Dotted box + connector line */}
            <div className="flex flex-col items-center absolute -left-10 top-0">
              <div className="w-6 h-6 border-2 border-dashed border-blue-400 rounded-md bg-white"></div>
              <div className="h-full w-px border-l-2 border-dotted border-purple-400 relative after:absolute after:bottom-0 after:left-[-5px] after:border-4 after:border-transparent after:border-t-purple-400"></div>
            </div>

            {/* Main content box */}
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <h3 className="text-blue-700 font-semibold mb-1">
                Introduction to DSA
              </h3>
              <p className="text-sm text-gray-600 mb-4">1 week</p>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                <li>Introduction to DSA</li>
                <li>Why Learn DSA</li>
                <li>Prerequisites</li>
              </ul>
            </div>
          </div>

          {/* Right column */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/images/code-visual.png" // ← change this to your actual code image
              alt="Code visual"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
