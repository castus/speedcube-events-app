"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Imprezy Speedcuberskie 2024</title>
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "e075490a437040bd90fdf1c99c0a9f4a"}'></script>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} vsc-initialized`}>
          <header className="pt-6 pb-6 md:pt-12 md:pb-12 mx-auto bg-[#FFB258]">
            <div className="container mx-auto">
              <h1 className="text-[#10172A] text-3xl md:text-5xl font-light tracking-[-.08em] text-center">
                <Image alt="Logo" src="/icon.png" width="60" height="60" className="mr-auto ml-auto md:mr-5 md:ml-0 block md:inline-block mb-3 md:mb-0" />
              Imprezy <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#f14561]">Speedcuberskie</span> 2024
              </h1>
            </div>
          </header>
              {children}
        <footer className="flex flex-row p-10 pl-0 justify-between bg-[#FFB258]">
            <div className="container mx-auto">
              <p className="text-[#10172A] text-sm sm:text-md font-light tracking-tighter">
                Strona zawiera publiczne dane z <a className="underline" href="https://www.worldcubeassociation.org/" target="_blank">World Cube Association</a> oraz <a className="underline" href="https://www.speedcubing.pl/kalendarz-imprez" target="_blank">Speedcubing.pl</a>
              </p>
            </div>
          </footer>
      </body>
    </html>
  );
}
