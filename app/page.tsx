"use client";

import ItemsCards from "@components/ItemCard";
import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="flex flex-col gap-6 text-lg my-4">
      <div className="grid gap-4 grid-cols-4">
        <ItemsCards
          image="https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTH0R04XgDgNb86e-2j6L5nNdogu8jt0crFh1A4tPzvBlNG7wTqKKbwEbfzXXZE4j1k"
          name_fr="Tomate"
          name_mg="Voatabia"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAS8OkKQJYKtUCdhmGLwwSfM1XjuF9KVy7Vhz5HTyYZorIz-BTvnOFNnFAyNbn6SO06TY&usqp=CAU"
          name_fr="Haricots vert"
          name_mg="Arikovera"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://myjam.co.uk/cdn/shop/products/WhiteCourgette_Arabic_500g.jpg?v=1653566642"
          name_fr="Haricots vert"
          name_mg="Haricovera"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://usercontent.one/wp/www.abcie.org/wp-content/uploads/2020/04/citrouille-600x600.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://img.taste.com.au/y05Rzqpn/w1200-h630-cfill/taste/2007/03/carrots-181856-2.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.heleneetlacledeschamps.fr/wp-content/uploads/2018/01/Le%CC%81gume-marche%CC%81-Madagascar.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://cdn.socleo.org/media/VS5DLJKT/P/choux-fleurs.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://shop.mlouma.com/wp-content/uploads/2021/04/pomme-de-terre.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.jardinet.fr/wp-content/uploads/2023/03/Tout-savoir-sur-la-patate-douce-1.jpg"
          name_fr="Citrouille"
          name_mg="voatavo"
          price_fr={0.62}
          price_mg={3000}
        />
      </div>
      <hr />
    </div>
  );
}
