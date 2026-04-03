"use client";

import { useState } from "react";
import BookingModal from "@/components/BookingModal";

type BookNowCTAProps = {
  className: string;
  text: string;
};

export default function BookNowCTA({ className, text }: BookNowCTAProps) {
  const [open, setOpen] = useState(false);

  const bookingUrl =
    "https://getsquire.com/booking/book/park-side-barbershop-placentia";

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {text}
      </button>

      <BookingModal open={open} onClose={setOpen} bookingUrl={bookingUrl} />
    </>
  );
}
