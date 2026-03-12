"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import parksideLogo from "../../public/parkside-logo.jpg";
import pLogo from "../../public/p-logo.jpg";
import { Inter } from "next/font/google";
import BookNowCTA from "./BookNowCTA";

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
  // { name: "Book Now", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50",
        "transition-all duration-300",
        scrolled
          ? "bg-black/85 backdrop-blur border-b border-white/10"
          : "bg-transparent",
        "text-zinc-100",
      ].join(" ")}
    >
      <nav
        aria-label="Global"
        className={`flex items-center justify-between px-6 py-4 lg:px-8 ${bodyFont.className}`}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <span className="sr-only">Park Side Barbershop</span>
            {/* Optional logo */}
            <Image
              alt="Park Side"
              src={pLogo}
              className="h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-100 hover:bg-white/10"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium tracking-wide text-zinc-100/90 hover:text-white transition"
            >
              {item.name}
            </Link>
          ))}
          <BookNowCTA
            className="
                       text-sm font-medium tracking-wide text-zinc-100/90 hover:text-white transition hover:cursor-pointer
                      "
            text="Book Now"
          />
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <a
            href="https://www.instagram.com/101maestro/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium tracking-wide text-zinc-100/90 hover:text-white transition hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-instagram inline mr-4"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
          </a>
          {/* socials (keep yours) */}
          {/* ... */}
        </div>
      </nav>

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/60" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="-m-1.5 p-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Park Side Barbershop</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-zinc-100 hover:bg-white/10"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-lg px-3 py-3 text-base font-medium text-zinc-100/90 hover:bg-white/10 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <BookNowCTA
              className="block rounded-lg px-3 py-3 text-base font-medium text-zinc-100/90 hover:bg-white/10 hover:text-white hover:cursor-pointer"
              text="Book Now"
            />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
