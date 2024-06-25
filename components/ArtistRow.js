import * as Collapsible from "@radix-ui/react-collapsible";
import Arrow from "@/components/Arrow";
import React from "react";

/**
 * @description A row for an artist
 * @param {import('../types').Artist}props
 * */

export const ArtistRow = (props) => {
  const { name, label, genres, description } = props;

  return (
    <Collapsible.Root>
      <li className="transition hover:bg-sally/10">
        <Collapsible.Trigger className="w-full grid text-left py-2.5 px-4 grid-cols-yeah group">
          <h2>{name}</h2>
          <div>{label}</div>
          <div></div>
          <div className="pl-4">{genres.join(", ")}</div>
          <div className="ml-auto transition-transform duration-300 group-data-[state='open']:rotate-90 place-self-center">
            <Arrow />
          </div>
        </Collapsible.Trigger>
        <Collapsible.Content className="overflow-hidden data-[state=open]:open data-[state=closed]:close">
          <div className="grid px-4 overflow-hidden grid-cols-yeah">
            <div className="flex flex-col col-span-3 pl-12 ml-1.5 gap-y-6 pb-6 pt-3">
              <h3 className="sr-only">Description</h3>
              <p>{description}</p>
            </div>
          </div>
        </Collapsible.Content>
      </li>
    </Collapsible.Root>
  );
};
