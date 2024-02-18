"use client"

import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function Logo(props: any) {
  function logoImage(name: string, logoURL: string) {
    return <Image className="place-self-center"
      alt={name}
      src={logoURL}
      height={100}
      width={100}
    />
  }

  return (
    props.item.URL.length > 0 ? (
      <Link
        size="sm"
        href={props.item.URL}
        as={Link}
        color="primary"
        isExternal
      >
        {logoImage(props.item.Name, props.item.LogoURL)}
      </Link>
    ) : (
      logoImage(props.item.Name, props.item.LogoURL)
    )
  );
}
