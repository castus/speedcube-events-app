"use client"

import ListItem from "./list_item";

let listComponents: any = []

export default function List(props: any) {
  Object.entries(props.items).forEach(([key, value]) => {
    const val: any = value
    if (val.length > 0) {
      listComponents.push(<ListItem key={key} header={key} items={value} />)
    }
  });
  return (
    [ listComponents ]
  );
}
