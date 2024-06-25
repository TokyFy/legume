import Link from "@/components/Link";
import Button from "@/components/Button";
import Arrow from "@/components/Arrow";
import React from "react";
import { useRouter } from "next/router";


export default function Header() {
  const route = useRouter().route;

  return (
    <header className="justify-between w-full pt-12 pb-16 mx-auto sm:flex px-6">
      <div>
        <h1 className="text-5xl">
          <Link href="/">Dago Artist</Link>
        </h1>
        <p className="my-4 max-w-2xl">
          A curated list of Malagasy artists to listen to while visiting our beautiful country...<br />
          Madagascar's vibrant music scene offers a rich tapestry of sounds that reflect our diverse cultural heritage and stunning landscapes. From traditional rhythms rooted in centuries-old traditions to modern interpretations blending local styles with global influences, these artists encapsulate the soul and spirit of Madagascar. Immerse yourself in the melodies of these talented musicians as you explore our unique island paradise.
        </p>
        {route === "/" ? (
          <Link href="/about" className="flex items-center mt-4 w-fit font-bold gap-2">
            <p>About</p> <Arrow />
          </Link>
        ) : (
          <Link href="/" className="flex items-center mt-4 gap-x-1 w-fit">
            <Arrow className="rotate-180" />
            Home
          </Link>
        )}
      </div>
    </header>
  );
}
