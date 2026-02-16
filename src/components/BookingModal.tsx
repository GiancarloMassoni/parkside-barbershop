"use client";

import { Dialog, DialogPanel } from "@headlessui/react";

export default function BookingModal({
  open,
  onClose,
  bookingUrl,
}: {
  open: boolean;
  onClose: (v: boolean) => void;
  bookingUrl: string;
}) {
  return (
    <Dialog
      open={open}
      onClose={() => onClose(false)}
      className="relative z-100"
    >
      <div className="fixed inset-0 bg-black/75 backdrop-blur-sm">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "url(/grain.png)" }}
        />
      </div>
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-100">
              Book an Appointment
            </p>
            <button
              onClick={() => onClose(false)}
              className="rounded-md px-3 py-2 text-xs uppercase tracking-widest text-zinc-200 hover:text-white hover:bg-white/10 hover:cursor-pointer "
            >
              Close
            </button>
          </div>

          <div className="relative h-[75vh]">
            <iframe
              title="Square Booking"
              src={bookingUrl}
              className="h-full w-full"
              allow="payment *; clipboard-write *"
              sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            />{" "}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
