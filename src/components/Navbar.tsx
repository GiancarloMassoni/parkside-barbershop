"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import parksideLogo from "../../public/parkside-logo.jpg";

import { Inter } from "next/font/google";

export const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
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
            {/* <Image alt="Park Side" src={parksideLogo} className="h-10 w-auto" priority /> */}
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
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
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
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
