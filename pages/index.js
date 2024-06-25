import React from "react";
import { artistData } from "../data";
import { ArtistRow, ArtistRowMobile } from "@/components/ArtistRow";
import { useRouter } from "next/router";
import { CaretSortIcon } from "@radix-ui/react-icons";


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

  const router = useRouter();

  const handleSort = async (sortBy) => {
    const params = new URLSearchParams({ sortBy });
    await router.push(`?${params.toString()}`);
  };


  return (
    <main className="w-full h-full">
      <div className="hidden sm:block">
        <div className="text-xl border-b-2 border-mcqueen">
          <ul className="grid w-full px-4 grid-cols-yeah text-lg cursor-pointer">
            <li className="pl-12 ml-1.5 flex gap-2 items-center" onClick={() => handleSort("name")} >
              <p>Artist</p>
              <CaretSortIcon />
            </li>
            <li className="flex gap-2 items-center" onClick={() => handleSort("label")} >
              <p>Label</p>
              <CaretSortIcon />
            </li>
            <li></li>
            <li className="pl-4 flex gap-2 items-center">
              <p>Genre</p>
            </li>
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

      <div className="block sm:hidden">
        <div className="text-xl border-b-2 border-mcqueen">
          <ul className="grid w-full px-4 grid-cols-yeah text-lg cursor-pointer">
            <li className="flex gap-2 items-center" onClick={() => handleSort("name")} >
              <p>Artist</p>
              <CaretSortIcon />
            </li>
          </ul>
        </div>
        <div className="grid isolate">
          <ul className="z-10 border-b divide-y border-mcqueen divide-mcqueen park overlay">
            {artists.map((artist) => (
              <ArtistRowMobile key={artist.name} {...artist} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
