"use client"

import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Switch, cn } from "@nextui-org/react";

export default function SectionHeader(props: any) {
  return (
    <div className="border-solid border-y-2 border-white p-4 mb-5 bg-[#ffeca1]">
      <div className="container mx-auto pr-3 pl-3">
        <div className="flex flex-row">
          <h1 className="text-[#10172A] text-2xl font-regular tracking-tighter basis-1/2">
            {props.title} <small className="font-light"> ({props.itemsCount})</small>
          </h1>
          {props.passedItemsCount > 0 && (
            <p className="basis-1/2 text-right mt-[2px]">
              <Switch isSelected={props.showAll} onValueChange={props.toggleShowAll} classNames={{
                base: cn(
                  "inline-flex flex-row-reverse",
                  "cursor-pointer rounded-lg gap-2 border-2 border-transparent",
                ),
                wrapper: "p-0 h-4 overflow-visible bg-[#91DAFF] group-data-[selected=true]:bg-[#FF6881]",
                thumb: cn("w-6 h-6 border-2 shadow-lg, border-[#4E9AE8]",
                  "group-data-[hover=true]:border-[#DE4B64]",
                  "group-data-[selected=true]:border-[#DE4B64]",
                  "group-data-[selected=true]:ml-6",
                  "group-data-[pressed=true]:w-7",
                  "group-data-[selected]:group-data-[pressed]:ml-4",
                ),
              }}>
                <div className="flex flex-col gap-1">
                  <p className="text-medium tracking-tighter">{`Minione (${props.passedItemsCount})`}</p>
                </div>
              </Switch>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
