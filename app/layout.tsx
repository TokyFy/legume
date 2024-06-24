import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toky FY",
  description: "Frontend developer from Madagascar",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-second  dark:bg-black no-scrollbar max-w-[1920px]">
        <main className="mx-auto my-6 max-w-4xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl">
              <Link href={"/"}>Bazaar</Link>
            </h1>
            <p className="">
              <Link href={"/about"}>Info</Link>
            </p>
          </div>
          <div>
            <Link
              className="p-2 border-2 border-neutral-600 font-sans flex w-fit"
              href={"/"}
            >
              Legumes
            </Link>
          </div>
          <div id="content" className="">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
