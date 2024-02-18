"use client"

import React, { useState } from 'react';
import SectionHeader from "./header";
import SectionContent from "./content";

export default function Section(props: any) {
  const [items, setItems] = useState(props.items);
  const [showAll, setShowAll] = useState(false);
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <SectionHeader
        title={props.header}
        itemsCount={props.items.filter(item => !item.HasPassed).length}
        passedItemsCount={props.items.filter(item => item.HasPassed).length}
        showAll={showAll}
        toggleShowAll={toggleShowAll}
      />
      <SectionContent items={props.items} showAll={showAll} />
    </>
  );
}
