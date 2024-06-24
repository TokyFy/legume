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
          name_fr="Courgette"
          name_mg="Korzety"
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
          name_fr="Carotte"
          name_mg="karoty"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://www.heleneetlacledeschamps.fr/wp-content/uploads/2018/01/Le%CC%81gume-marche%CC%81-Madagascar.jpg"
          name_fr="Aubergines africaines"
          name_mg="Angivy"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://cdn.socleo.org/media/VS5DLJKT/P/choux-fleurs.jpg"
          name_fr="Chou-fleur"
          name_mg="Soflera"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://shop.mlouma.com/wp-content/uploads/2021/04/pomme-de-terre.jpg"
          name_fr="Pomme de terre"
          name_mg="Ovy"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://i.notretemps.com/1400x787/smart/2020/07/30/dietetique-les-bienfaits-de-laubergine.jpeg"
          name_fr="Aubergine"
          name_mg="Baranjely"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_193,q_auto,dpr_2.0,w_325/https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/9411/chou-blanc-tag-cabbage-2084225_1920.jpg"
          name_fr="Choux"
          name_mg="Laisoa"
          price_fr={0.62}
          price_mg={3000}
        />

        <ItemsCards
          image="https://s3-eu-west-1.amazonaws.com/images-ca-1-0-1-eu/tag_photos/original/9468/tag-oignons-rouges-pxhere.jpg"
          name_fr="Onion"
          name_mg="Tongolo"
          price_fr={0.62}
          price_mg={3000}
        />
      </div>
      <hr />
    </div>
  );
}