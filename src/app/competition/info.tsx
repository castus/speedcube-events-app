"use client"

import React from "react";
import { Divider, Link, Button, } from "@nextui-org/react";
import Image from "next/image";
import { FaUsers, FaEnvelope, FaGlobe } from "react-icons/fa";

const year = "2024"

export default function Info(props: any) {
  let name = props.item.Name.replace(" " + year, "")

  let place = props.item.Place
  if (props.item.Distance != "") {
    place += " - " + props.item.Distance
  }
  if (props.item.Duration != "") {
    place += ", " + props.item.Duration
  }

  let events: any = []
  if (props.item.Events != null) {
    props.item.Events.map((item: string) => {
      events.push(cubeImageForTag(item))
    })
  }

  let eventsText = null
  if (events.length > 0) {
    eventsText = <p className="text-small text-default-700">Konkurencje: {events}</p>
  }

  let mainEventsText = null
  if (props.item.MainEvent != "") {
    mainEventsText = mainCubeImageForTag(props.item.MainEvent)
  }

  let competitorsText = null
  if (props.item.Registered != 0 && props.item.CompetitorLimit != 0) {
    competitorsText = `${props.item.Registered}/${props.item.CompetitorLimit}`
  }

  let WCALogo = null
  if (props.item.HasWCA) {
    WCALogo = <Image src="https://www.worldcubeassociation.org/files/WCAlogo_notext.svg" width="30" height="30" alt="WCA logo" className="inline-block absolute top-2 right-2" />
  }

  function cubeImageForTag(tag: string) {
    const src = 'https://raw.githubusercontent.com/cubing/icons/main/svgs/event/' + tag + '.svg'
    return <Image key={tag} src={src} width="20" height="20" alt={tag} className="inline-block ml-small" />
  }

  function mainCubeImageForTag(tag: string) {
    const src = 'https://raw.githubusercontent.com/cubing/icons/main/svgs/event/' + tag + '.svg'
    return <Image key={tag} src={src} width="30" height="30" alt={tag} className="inline-block absolute top-12 right-2" />
  }

  return (
    <div>
      <div className="pr-8">
        <h3 className="font-semibold tracking-tighter pb-2 leading-4">
          {props.item.URL.length > 0 ? (
            <Link
              size="lg"
              className="underline underline-offset-4"
              href={props.item.URL}
              color="foreground"
              isExternal
            >
              {name}
            </Link>
          ) : (
            name
          )}
        </h3>
        <p className="text-small text-default-500">{props.item.Date}</p>
        <p className="text-small text-default-500">{place}</p>
      </div>
      <div>
        {eventsText != null && (
          <Divider className="mt-2 mb-2" />
        )}
        {eventsText}
        {WCALogo}
        {mainEventsText}

        <p className="mt-3 flex gap-3">
          {competitorsText != null && (
            <Button
              className={props.item.Registered == props.item.CompetitorLimit ? `iconButtonFull` : `iconButton`}
              size="sm"
              href={`${props.item.URL}/registrations`}
              as={Link}
              color="primary"
              isExternal
              variant="bordered"
            >
              <FaUsers className="iconButtonIcon" />
              <span className="iconButtonText">{competitorsText}</span>
            </Button>
          )}
          {props.item.URL.length > 0 && (
            <Button
              className="iconButton"
              size="sm"
              href={props.item.URL}
              as={Link}
              color="primary"
              isExternal
              variant="bordered"
            >
              <FaGlobe className="iconButtonIcon" />
            </Button>
          )}
          <Button
            className="iconButton"
            size="sm"
            href={`mailto:${props.item.ContactURL}`}
            as={Link}
            color="primary"
            isExternal
            variant="bordered"
          >
            <FaEnvelope className="iconButtonIcon" />
          </Button>
        </p>
      </div>
    </div>
  );
}
