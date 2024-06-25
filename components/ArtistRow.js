import * as Collapsible from "@radix-ui/react-collapsible";
import Arrow from "@/components/Arrow";
import React from "react";
import Image from 'next/image'
import { ArrowBottomLeftIcon, ArrowTopRightIcon, PlusIcon } from "@radix-ui/react-icons";
import Link from "next/link";

/**
 * @description A row for an artist
 * @param {import('../types').Artist}props
 * */

function Genre({ str }) {
  return (<p className="text-[13px] border p-0 px-2 border-mcqueen rounded-md">{str}</p>)
}

export const ArtistRowMobile = (props) => {
  const { name, label, genres, description, image, yt } = props;

  return (
    <Collapsible.Root>
      <li className="transition hover:bg-sally/10">
        <Collapsible.Trigger className="w-full grid text-left py-2.5 group px-4">
          <h3>{name}</h3>
          <div className="flex gap-2 flex-wrap py-2">{genres.map(el => <Genre str={el} />)}</div>
          <div className="ml-auto transition-transform duration-300 group-data-[state='open']:rotate-90 place-self-center">
            <Arrow />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:open data-[state=closed]:close">
          <div className="grid px-4 overflow-hidden">
            <div className="flex flex-col col-span-3 ml-1.5 gap-y-6 pb-6 pt-3">
              <div className="w-64 aspect-square relative">
                <Image
                  style={{ objectFit: "cover" }}
                  fill
                  src={image}
                />
              </div>
              <h3 className="sr-only">Description</h3>
              <div>
                <p>{description}</p>
              </div>
              <Link className="flex items-center gap-2 border-b-2 w-max border-mcqueen" href="/">
                <p>Youtube</p>
                <PlusIcon />
              </Link>
            </div>
          </div>
        </Collapsible.Content>
      </li>
    </Collapsible.Root>
  );
};


export const ArtistRow = (props) => {
  const { name, label, genres, description, image, youtube } = props;

  return (
    <Collapsible.Root>
      <li className="transition hover:bg-sally/10">
        <Collapsible.Trigger className="w-full grid text-left py-2.5 grid-cols-yeah group">
          <h2>{name}</h2>
          <div>{label}</div>
          <div></div>
          <div className="pl-4 flex gap-2 flex-wrap">{genres.map(el => <Genre str={el} />)}</div>
          <div className="ml-auto transition-transform duration-300 group-data-[state='open']:rotate-90 place-self-center">
            <PlusIcon />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:open data-[state=closed]:close">
          <div className="grid px-4 overflow-hidden grid-cols-yeah">
            <div className="flex flex-col col-span-3 pl-12 ml-1.5 gap-y-6 pb-6 pt-3">
              <div className="w-64 aspect-square relative">
                <Image
                  style={{ objectFit: "cover" }}
                  fill
                  src={image}
                />
              </div>
              <h3 className="sr-only">Description</h3>
              <div>
                <p>{description}</p>
              </div>
              <Link className="flex items-center gap-2 border p-2 w-max border-red-500 text-red-500" rel="noopener noreferrer" target="_blank" href={youtube}>
                <p>Youtube</p>
                <ArrowTopRightIcon />
              </Link>
            </div>
          </div>
        </Collapsible.Content>
      </li>
    </Collapsible.Root>
  );
};
