import "./globals.css";
import type { Metadata } from "next";
import React from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Toky FY",
  description: "Frontend developer from Madagascar",
};

function Tags({ tag, url }: { tag: string; url: string }) {
  return (
    <Link
      className="py-2 px-4 border-2 border-neutral-600 flex w-fit"
      href={url}
    >
      {tag}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-second  dark:bg-black no-scrollbar max-w-[1920px]">
        <main className="my-6 mx-6 max-w-7xl">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl">
              <Link href={"/"}>Bazaar</Link>
            </h1>
            <p className="">
              <Link href={"/about"}>Info</Link>
            </p>
          </div>
          <div className="flex gap-2">
            <Tags tag="Legumes" url="/" />
            <Tags tag="Fruits" url="/" />
            <Tags tag="Epices" url="/" />
            <Tags tag="Viandes" url="/" />
          </div>
          <div id="content" className="">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
