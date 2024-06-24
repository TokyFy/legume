"use client";

import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

type props = {
  image: string;
  name_fr: string;
  name_mg: string;
  price_mg: number;
  price_fr: number;
};

export default function ItemsCards({
  image,
  name_fr,
  name_mg,
  price_fr,
  price_mg,
}: props) {
  return (
    <div className="p-2 bg-neutral-100 border border-neutral-300">
      <div className="w-full aspect-square overflow-hidden relative">
        <Image fill objectFit="cover" src={image} alt={"tomato"} />
      </div>
      <div className="py-2">
        <p className="text-lg underline">
          {name_fr} <span>({name_mg})</span>
        </p>
        <p className="font-mono text-sm">
          {price_mg} <span>Ar</span> <span> / Kg</span>
        </p>
        <p className="font-mono text-sm">
          {price_fr} <span>€</span> <span> / Kg</span>
        </p>
      </div>
    </div>
  );
}
