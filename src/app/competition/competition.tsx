"use client"

import React from "react";
import Logo from "./logo";
import Info from "./info";

export default function Competition(props: any) {
  let cls = "flex bg-white rounded-lg border-solid border-2 relative"
  if (props.item.HasPassed) {
    cls = `${cls} border-white opacity-75`
  } else {
    cls = `${cls} border-black`
  }

  return (
    <div className={cls}>
      <div className="flex-none md:flex w-[100px] md:w-[140px] p-3 pt-6 md:p-5">
        <Logo item={props.item} />
      </div>
      <div className="flex-auto w-64 p-5 pt-3 rounded-r-lg bg-[#dff4ff]">
        <Info item={props.item} />
      </div>
    </div>
  );
}
