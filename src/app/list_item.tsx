"use client"

import React from "react";
import Competition from "./competition";
import { FaRegCalendarAlt } from "react-icons/fa";

let listComponents: any = []

export default function ListItem(props: any) {
  listComponents = props.items.map((object: any) => {
    return <Competition key={object.Id} item={object} />
  })
  return (
    <>
      <div className="border-solid border-y-2 border-white p-4 mb-5 bg-[#ffeca1]">
        <h1 className="container mx-auto pr-3 pl-3 text-[#10172A] text-2xl font-regular tracking-tighter">
          <FaRegCalendarAlt className="inline align-text-top relative bottom-[-1px]" /> {props.header}
          <small className="font-light"> ({props.items.length})</small>
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="pr-3 pl-3">
          <div className="grid place-items-stretch grid-cols-1 gap-6 md:grid-cols-2 mb-10">
            {[ listComponents ]}
          </div>
        </div>
      </div>
    </>
  );
}
