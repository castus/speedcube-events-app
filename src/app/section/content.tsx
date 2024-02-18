"use client"

import React from "react";
import Competition from "../competition/competition";

let listComponents: any = []

export default function Section(props: any) {
  if (props.showAll) {
    listComponents = props.items.map((object: any) => {
      return <Competition key={object.Id} item={object} />
    })
  } else {
    listComponents = props.items.filter(item => !item.HasPassed).map((object: any) => {
      return <Competition key={object.Id} item={object} />
    })
  }
  return (
    <div className="container mx-auto">
      <div className="pr-3 pl-3">
        <div className="grid place-items-stretch grid-cols-1 gap-6 md:grid-cols-2 mb-10">
          {[ listComponents ]}
        </div>
      </div>
    </div>
  );
}
