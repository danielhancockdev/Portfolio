"use client";


import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import AuroraBackground from "./Components/Background/AuroraBackground";



export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden text-zinc-900 dark:text-white">
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        {/* PAGE CONTENT */}
        <div className="px-6 py-12 flex flex-col">
          <div className="mx-auto w-full max-w-7xl space-y-8">
            {/* ABOUT */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* IMAGE CARD */}
                <div className="self-center bg-white dark:bg-zinc-900 border border-zinc-200 
dark:border-zinc-800 rounded-xl p-2 shadow-sm flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={450}
                    height={550}
                    className="rounded-xl border-8 border-zinc-200 dark:border-zinc-800 hover:scale-105 transition-all duration-300"
                  />
                </div>
                {/* ABOUT CARD */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 
                dark:border-zinc-800 rounded-xl p-8 shadow-sm max-h-[69vh] overflow-y-auto">
                  <h1 className="text-3xl font-semibold mb-4">
                    About Me
                  </h1>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    I am a British national currently living in the UK, Birmingham that has recently graduated from Birmingham Newman University.
                    <br />
                    I have a recieved my final results and have achieved a First-Class Computer Science Degree and have a prior 10 years retail experience.
                    <br />
                    I am currently looking for all development opportunities while continuing to build projects to improve my skills such as this webpage.
                  </p>
                  {/* SOCIAL LINKS */}
                  <div className="mt-6 flex items-center gap-4">
                    <a
                      href="https://www.linkedin.com/in/daniel-hancock-960a853b4/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 
                      dark:text-zinc-300 hover:text-blue-600 hover:scale-105 transition">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                  {/* SKILLS */}
                  <div className="mt-8 space-y-6">
                    <div>
                      <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                        Current Skills
                      </h2>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                        Languages
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        CSS3 • TypeScript • JavaScript • HTML5 • Kotlin • Dart • Python • C#
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                        Frameworks
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        React • .Net • Node.js • Next.js • Flutter • Tailwind
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                        Tools and Technology
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        Android Studio • Git • Github • Visual Studio • Vercel
                      </p>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-zinc-800 dark:text-zinc-200 mb-1">
                        Database and Cloud Services
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400">
                        MySQL • Firebase • Azure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}