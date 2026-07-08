"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {useTheme} from "./ThemeProvider"
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const [toolsOpen, setToolsOpen] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 bg-white/100 dark:bg-zinc-900/100 text-zinc-900 dark:text-white
      backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 transition-colors duration-300">

      {/* LEFT */}
      <div className="w-10" />

      {/* CENTER */}
      <div className="flex items-center gap-4">

        {/* TABS */}
        <div className="flex gap-3">
  <Link
    href="/"
    className="px-5 py-2 text-m font-medium border rounded-md border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    About
  </Link>

  <Link
    href="/UniversityTranscript"
    className="px-5 py-2 text-m font-medium border rounded-md border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    University Transcript
  </Link>

  <Link
    href="/Projects"
    className="px-5 py-2 text-m font-medium border rounded-md border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    Projects
  </Link>

  <Link
    href="/CV"
    className="px-5 py-2 text-m font-medium border rounded-md border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    CV
  </Link>

  <Link
    href="/Contact"
    className="px-5 py-2 text-m font-medium border rounded-md border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-800"
  >
    Contact
  </Link>
</div>

        {/* TOOLS */}
        <div className="relative">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className="px-5 py-2 text-m font-medium border rounded-md
              border-zinc-300 dark:border-zinc-700
              text-zinc-700 dark:text-zinc-300
              hover:bg-zinc-200 dark:hover:bg-zinc-800"
          >
            Tools ▾
          </button>

          {toolsOpen && (
            <div className="absolute mt-2 w-48 border rounded-md bg-white dark:bg-zinc-900 shadow-md z-50">

              <button
                onClick={() => {
                  router.push("/mini-assistant");
                  setToolsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              >
                Mini Assistant
              </button>

            </div>
          )}
        </div>

      </div>

      {/* RIGHT */}
      <button
  onClick={toggleTheme}
  className="px-3 py-2 text-m border rounded-md border-zinc-300 dark:border-zinc-700
  hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
>
  {darkMode ? "Light" : "Dark"}
</button>

    </nav>
  );
}