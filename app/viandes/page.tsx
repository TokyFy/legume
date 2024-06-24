"use client";

import ItemsCards from "@components/ItemCard";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="flex flex-col gap-6 text-lg my-4">
      <div className="grid gap-4 grid-cols-4">
        <ItemsCards
          image="https://media.istockphoto.com/id/1403665879/fr/photo/steaks-de-b%C5%93uf-cru-escalopes-et-shashlik-aux-%C3%A9pices.jpg?s=612x612&w=0&k=20&c=uKUJ-dIDhCHEQgmbv6e9XLOFPFkSvK5UssvGto2ZwEI="
          name_fr="Beuf"
          name_mg="Omby"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.brasero-artisan.com/blog/wp-content/uploads/2022/02/AdobeStock_194933878_redim.jpeg"
          name_fr="Porc"
          name_mg="Kisoa"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://cdn.lebuteur.com/data/images/article/thumbs/large-les-proprietes-de-la-viande-de-poulet-4cea5.jpg"
          name_fr="Poulet"
          name_mg="Akoho"
          price_fr={0.62}
          price_mg={3000}
        />
      </div>
      <hr />
    </div>
  );
}
