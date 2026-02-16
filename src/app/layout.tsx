import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { bodyFont, heroFont } from "./fonts";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Park Side Barbershop",
  description:
    "Park Side Barbershop is a locally owned barbershop in Placentia offering clean haircuts, fades, beard trims, and hot towel shaves. Walk-ins welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${bodyFont.variable}
          ${heroFont.variable}
          bg-black text-zinc-100
        `}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
