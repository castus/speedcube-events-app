"use client"

import Section from "./section/section";

let sections: any = []

export default function List(props: any) {
  let index = 0
  Object.entries(props.items).forEach(([key, value]) => {
    const val: any = value
    if (val.length > 0) {
      sections.push(<Section key={index} header={key} items={value} />)
      index++
    }
  });
  return (
    <>
      {[ sections ]}
    </>
  );
}
