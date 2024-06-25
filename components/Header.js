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
          Une liste sélectionnée d&apos;artistes malgaches à écouter lors de votre visite dans notre magnifique pays...<br />

          La scène musicale dynamique de Madagascar offre une riche palette de sons qui reflètent notre patrimoine culturel diversifié et nos paysages époustouflants. Des rythmes traditionnels enracinés dans des traditions séculaires aux interprétations modernes mêlant styles locaux et influences mondiales, ces artistes capturent l&apos;âme et l&apos;esprit de Madagascar. Plongez-vous dans les mélodies de ces musiciens talentueux alors que vous explorez notre île paradisiaque unique.
        </p>
        {route === "/" ? (
          <Link href="/about" className="flex items-center mt-4 w-fit font-bold gap-2">
            {/* <p>About</p> <Arrow /> */}
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
