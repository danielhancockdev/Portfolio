"use client";


import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa6";
import Link from "next/link";

const tabs = ["About", "Projects", "Curriculum Vitae", "Contact Me"];

export default function Home() {
  const router = useRouter();
  const [toolsOpen, setToolsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("About");
  const [darkMode, setDarkMode] = useState(true);

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;

      setMouse({ x: nx, y: ny });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-200 dark:bg-zinc-950 text-zinc-900 dark:text-white">

      {/* AURORA BACKGROUND */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* LEFT CLOUD */}
        <div
          className="absolute top-[-250px] left-[-250px] w-[800px] h-[800px]
      blur-[220px] rounded-full transition-colors duration-500"
          style={{
            backgroundColor: darkMode
              ? "rgba(34,197,94,0.35)"
              : "rgba(255, 0, 0, 0.5)",

            transform: `
        translate(
          ${((mouse.x - 0.5) * Math.abs(mouse.y - 0.5) * 2) * -260}px,
          ${((mouse.y - 0.5) * Math.abs(mouse.x - 0.5) * 2) * -260}px
        )
      `,
          }}
        />
        {/* RIGHT CLOUD */}
        <div
          className="absolute bottom-[-250px] right-[-250px] w-[900px] h-[900px]
      blur-[240px] rounded-full transition-colors duration-500"
          style={{
            backgroundColor: darkMode
              ? "rgba(16,185,129,0.30)"
              : "rgba(255, 30, 0, 0.55)",

            transform: `
        translate(
          ${((mouse.x - 0.5) * Math.abs(mouse.x - 0.5)) * 520}px,
          ${((mouse.y - 0.5) * Math.abs(mouse.y - 0.5)) * 520}px
        )
      `,
          }}
        />
        {/* CENTER CLOUD */}
        <div
          className="absolute top-[30%] left-[50%] w-[650px] h-[650px]
      blur-[200px] rounded-full transition-colors duration-500"
          style={{
            backgroundColor: darkMode
              ? "rgba(132,204,22,0.25)"
              : "rgba(255, 17, 0, 0.45)",

            transform: `
        translate(
          ${(Math.sin(mouse.x * Math.PI * 2) * 120) + (mouse.x - 0.5) * 180}px,
          ${(Math.cos(mouse.y * Math.PI * 2) * 120) + (mouse.y - 0.5) * 180}px
        )
      `,
          }}
        />

      </div>
      {/* CONTENT WRAPPER */}
      <div className="relative z-10">
        <nav className="w-full flex items-center justify-between px-6 py-5
  bg-white/80 dark:bg-zinc-900/80
  text-zinc-900 dark:text-white
  backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800
  sticky top-0 z-50 transition-colors duration-300">

          {/* LEFT (optional spacer / logo area) */}
          <div className="w-10" />

          {/* CENTER (tabs + tools grouped together) */}
          <div className="flex items-center gap-4">

            {/* TABS */}
            <div className="flex gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 text-sm font-medium border rounded-md transition-all duration-200
            ${activeTab === tab
                      ? "bg-zinc-900 text-white border-zinc-900 dark:bg-white dark:text-black dark:border-white"
                      : "border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* TOOLS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="px-5 py-2 text-sm font-medium border rounded-md transition-all duration-200
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
                      router.push("/development-dashboard");
                      setToolsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  >
                    Developer Dashboard
                  </button>

                </div>
              )}
            </div>

          </div>

          {/* RIGHT (theme toggle) */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 text-sm border rounded-md border-zinc-300 dark:border-zinc-700
      hover:bg-zinc-200 dark:hover:bg-zinc-800 transition"
          >
            {darkMode ? "Light" : "Dark"}
          </button>

        </nav>

        {/* PAGE CONTENT */}
        <div className="px-6 py-12 flex flex-col">
          <div className="mx-auto w-full max-w-7xl space-y-8">
            {/* ABOUT */}
            {activeTab === "About" && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* IMAGE CARD */}
                <div className="self-start bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-2 shadow-sm flex items-center justify-center">
                  <Image
                    src="/profile.png"
                    alt="Profile"
                    width={450}
                    height={550}
                    className="rounded-xl border-8 border-zinc-200 dark:border-zinc-800 hover:scale-105 transition-all duration-300"
                  />
                </div>
                {/* ABOUT CARD */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm max-h-[69vh] overflow-y-auto">
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
                      className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 hover:scale-105 transition">
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
                        Android Studio • Git • Github
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
            )}

            {activeTab === "Projects" && (
              <div className="lg:col-span-2 space-y-6">
                {/* Projects Header Box */}
                <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
                  <h1 className="text-2xl font-semibold text-center text-zinc-900 dark:text-white">
                    Projects
                  </h1>
                </div>

                {/* Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img
                      src="/profile.png"
                      alt="Gamification Application"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                        Gamification Application
                      </h2>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img
                      src="/profile.png"
                      alt="Gamification Application"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                        Mobile Chat App
                      </h2>
                    </div>
                  </div>

                  <div className="rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                    <img
                      src="/profile.png"
                      alt="Gamification Application"
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 bg-black dark:bg-white">
                      <h2 className="text-lg font-semibold text-center text-zinc-900 dark:text-white">
                        Iot Device and Software
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* CV */}
            {activeTab === "Curriculum Vitae" && (
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden">
                <object
                  data="/cv.pdf#view=FitH"
                  type="application/pdf"
                  className="w-full h-[85vh]" />
              </div>
            )}
            {/* CONTACT */}
            {activeTab === "Contact Me" && (
              <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-8 shadow-sm">
                <h1 className="text-2xl font-semibold mb-4">
                  Contact
                </h1>
                <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  Email: danielhancock.dev@gmail.com <br />
                  Phone: +44 7847 476241
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}