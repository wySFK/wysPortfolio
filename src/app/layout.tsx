"use client";

import "@/styles/globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wyslie Basa",
  description: "Front End Developer based in Davao City",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="lenis bg-[#FFFFFF]">
      <head>
        <title>Wyslie Basa</title>
        <link rel="icon" href="/images/W.ico" type="image/x-icon" />
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="lenis-smooth w-full min-h-screen m-0 p-0 bg-[#FFFFFF]">
        <div className="bg-[#FFFFFF]">
          <SmoothScrolling>{children}</SmoothScrolling>
        </div>
      </body>
    </html>
  );
} 