export function KidsIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* comb */}
      <path d="M3 6h14" />
      <path d="M3 6v4" />
      <path d="M5 6v4" />
      <path d="M7 6v4" />
      <path d="M9 6v4" />
      <path d="M11 6v4" />
      <path d="M13 6v4" />

      {/* scissors */}
      <circle cx="17.5" cy="15.5" r="1.5" />
      <circle cx="20.5" cy="18.5" r="1.5" />
      <path d="M16 17l6-6" />
    </svg>
  );
}
