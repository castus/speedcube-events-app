"use client"

import React from "react";
import Competition from "./competition";

let listComponents: any = []

export default function ListItem(props: any) {
  listComponents = props.items.map((object: any) => {
    return <Competition key={object.Id} item={object} />
  })
  return (
    <>
      <h1 className="text-[#10172A] text-3xl font-semibold tracking-tighter mb-5">{props.header}</h1>
      <div className="grid place-items-stretch grid-cols-1 gap-6 mb-10 md:grid-cols-2">
        {[ listComponents ]}
      </div>
    </>
  );
}
