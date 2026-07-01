import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/Navbar";
import ThemeProvider from "./Components/ThemeProvider";
import AuroraBackground from "./Components/Background/AuroraBackground";
import Footer from "./Components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Development Portfolio",
  description: "A development portfolio sharing and displaying my skills",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
  <ThemeProvider>
    <AuroraBackground />
    <Navbar />

    <main className="flex-1">
      {children}
    </main>

    <Footer />
  </ThemeProvider>
</body>
    </html>
  );
}
