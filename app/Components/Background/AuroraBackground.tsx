"use client";

import { useEffect, useState } from "react";
import { useTheme } from "../ThemeProvider";


type AuroraBackgroundProps = {
  darkMode: boolean;
};

export default function AuroraBackground() {
  const { darkMode } = useTheme();

  console.log("AuroraBackground darkMode:", darkMode);

  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-white dark:bg-black">
      {/* LEFT */}
      <div
        className="absolute top-[-250px] left-[-250px] w-[800px] h-[800px] blur-[220px] rounded-full"
        style={{
          backgroundColor: darkMode
            ? "rgba(34,197,94,0.35)"
            : "rgba(255, 0, 0, 0.5)",
          transform: `translate(${((mouse.x - 0.5) * 2) * -260}px, ${
            ((mouse.y - 0.5) * 2) * -260
          }px)`,
        }}
      />

      {/* RIGHT */}
      <div
        className="absolute bottom-[-250px] right-[-250px] w-[900px] h-[900px] blur-[240px] rounded-full"
        style={{
          backgroundColor: darkMode
            ? "rgba(16,185,129,0.30)"
            : "rgba(255, 30, 0, 0.55)",
          transform: `translate(${(mouse.x - 0.5) * 520}px, ${
            (mouse.y - 0.5) * 520
          }px)`,
        }}
      />

      {/* CENTER */}
      <div
        className="absolute top-[30%] left-[50%] w-[650px] h-[650px] blur-[200px] rounded-full"
        style={{
          backgroundColor: darkMode
            ? "rgba(132,204,22,0.25)"
            : "rgba(255, 17, 0, 0.45)",
        }}
      />
    </div>
  );
}