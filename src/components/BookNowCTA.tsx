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
    "https://book.squareup.com/appointments/2f58806a-b8b8-4fbc-a253-11852e594ed9/location/AEC220JEJ7A49?buttonTextColor=ffffff&color=000000&locale=en&referrer=so";

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {text}
      </button>

      <BookingModal open={open} onClose={setOpen} bookingUrl={bookingUrl} />
    </>
  );
}
