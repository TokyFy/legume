"use client";

import ItemsCards from "@components/ItemCard";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="flex flex-col gap-6 text-lg my-4">
      <div className="grid gap-4 grid-cols-4">
        <ItemsCards
          image="https://azmartinique.com/sites/azmartinique.com/files/fruits/letchis-4.jpg"
          name_fr="Letchi"
          name_mg="letchi"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://i-df.unimedias.fr/2022/11/02/istock-174959827.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&w=890"
          name_fr="Banane"
          name_mg="Akonjo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://iod.keplrstatic.com/api/ar_1,c_crop,g_north/c_fill,dpr_auto,f_auto,q_70,w_750/mon_marche/7807_AVOCAT_TROPICAL2.jpg"
          name_fr="Avocat"
          name_mg="zavoka"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.urlaub-auf-madagaskar.com/wp-content/uploads/2020/03/Klementinen.jpg"
          name_fr="Orange"
          name_mg="Voasary"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://fruitsdemadagascar.com/wp-content/uploads/2019/12/sceau-citron-scaled.jpg"
          name_fr="Citron"
          name_mg="voasary"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.urlaub-auf-madagaskar.com/wp-content/uploads/2020/03/Kaki.jpg"
          name_fr="kaki"
          name_mg="kaki"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.fosatradingmadagascar.com/wp-content/uploads/2023/02/mango2-1024x575.png"
          name_fr="Mangue"
          name_mg="Manga"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://cdn.pixabay.com/photo/2019/06/02/12/44/strawberry-4246395_960_720.jpg"
          name_fr="Fraise"
          name_mg="Fraise"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://supermarche.mg/wp-content/uploads/2019/11/peche-climborque.jpeg"
          name_fr="Peache"
          name_mg="paiso"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.jurgenenkatja.nl/wp-content/uploads/2020/04/pibasy.jpg"
          name_fr="Nèfle"
          name_mg="paiso"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://static.libertyprim.com/files/offres/vend-ananas-victoria-madagascar-1357-2596-large.jpg?1554985073"
          name_fr="Ananas"
          name_mg="Mananasy"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://locavor.fr/data/produits/3/50915/50915-pommes-golden-1.jpg"
          name_fr="Pomme"
          name_mg="Paoma"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://explurt.com/wp-content/uploads/2023/09/pexels-ivanna-kykla-4018846-1-1024x683.jpg"
          name_fr="Jujube"
          name_mg="voa tsinefy"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://aromeya.com/wp-content/uploads/2023/12/cocod.webp"
          name_fr="Coco"
          name_mg="coco"
          price_fr={0.62}
          price_mg={3000}
        />
      </div>
      <hr />
    </div>
  );
}
