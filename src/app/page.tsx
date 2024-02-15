"use client"

import React, { useState, useEffect } from 'react';
import { Progress } from "@nextui-org/react";
import List from "./list";

function prepare(data: any): any {
  let list: Record<string, any[]> = {
    "Styczeń": [],
    "Luty": [],
    "Marzec": [],
    "Kwiecień": [],
    "Maj": [],
    "Czerwiec": [],
    "Lipiec": [],
    "Sierpień": [],
    "Wrzesień": [],
    "Październik": [],
    "Listopad": [],
    "Grudzień": []
  }
  data.map((item: any) => {
    let header = item.Header.replace(" 2024", "")
    try {
      list[header].push(item)
    } catch (e) {
      console.log(header, item)
    }
  })

  const sorted = sortListByDate(list)
  return sorted
}

function extractDay(dateString: string): number {
  let days = dateString.split(" ")[0]
  let day = days.split("-")[0]

  return parseInt(day, 10)
}

function sortListByDate(list: any): any {
  Object.entries(list).forEach(([key, value]) => {
    const val: any = value
    if (val.length > 0) {
      val.sort((a: any, b: any) => {
        const dayA = extractDay(a.Date)
        const dayB = extractDay(b.Date)
        if (dayA < dayB) {
          return -1;
        }
        if (dayA > dayB) {
          return 1;
        }

        return 0;
      })
      list[key] = val
    }
  });

  return list
}

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let dataURL = ""
  if (process.env.NODE_ENV === 'production') {
    dataURL = "https://speedcube-events.s3.eu-central-1.amazonaws.com/data.json"
  } else {
    dataURL = "https://speedcube-events-staging.s3.eu-central-1.amazonaws.com/data.json"
  }
  useEffect(() => {
    fetch(dataURL, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(jsonData => {
      setData(prepare(jsonData));
      setLoading(false);
    })
    .catch(err => {
      setError(err.message);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Progress
      color="success"
      size="md"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md mx-auto my-6"
    />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <List key="main" items={data} />
  );
}
