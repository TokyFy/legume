import React from "react";
import { artistData } from "../data";
import { Sort } from "@/components/Sort";
import { ArtistRow } from "@/components/ArtistRow";

export async function getServerSideProps(context) {
  const { sortBy } = context.query;

  if (sortBy) {
    artistData.sort(sortBy);
  }

  return {
    props: {
      artists: artistData.artists,
    },
  };
}

export default function Home({ artists }) {
  return (
    <main className="w-full h-full">
      <div className="mb-4 px-3 flex justify-end">
        <Sort />
      </div>
      <div className="hidden sm:block">
        <div className="text-xl border-b-2 border-mcqueen">
          <ul className="grid w-full px-4 grid-cols-yeah">
            <li className="pl-12 ml-1.5">Artist</li>
            <li>Label</li>
            <li></li>
            <li className="pl-4">Genre</li>
          </ul>
        </div>
        <div className="grid isolate">
          <ul className="z-10 border-b divide-y border-mcqueen divide-mcqueen park overlay">
            {artists.map((artist) => (
              <ArtistRow key={artist.name} {...artist} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
