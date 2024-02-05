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
      </head>
      <body className={`${inter.className} vsc-initialized`}>
          <div className="container mx-auto">
            <div className="pr-3 pl-3">
              <header className="pt-6 pb-6 md:pt-12 md:pb-12 mx-auto">
                <h1 className="text-[#10172A] text-2xl md:text-4xl font-semibold tracking-tighter text-center">
                  <Image alt="Logo" src="/cube.png" width="60" height="60" className="w-16 h-16 mr-auto ml-auto md:mr-5 md:ml-0 block md:inline-block" />
                  Imprezy <span className="underline leading-8 underline-offset-8	decoration-8 decoration-[#8B5CF6]">Speedcuberskie</span> 2024
                </h1>
              </header>
              {children}
              <footer className="flex flex-row p-10 pl-0 justify-between">
                <p className="text-[#10172A] text-sm sm:text-md font-light tracking-tighter">
                  Strona zawiera publiczne dane z <a className="underline" href="https://www.worldcubeassociation.org/" target="_blank">World Cube Association</a> oraz <a className="underline" href="https://www.speedcubing.pl/kalendarz-imprez" target="_blank">Speedcubing.pl</a>
                </p>
              </footer>
            </div>
          </div>
      </body>
    </html>
  );
}
