export function BeardIcon({ className }: { className?: string }) {
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
      {/* face outline */}
      <path d="M6 9c0-3.5 2.7-6 6-6s6 2.5 6 6" />

      {/* beard shape */}
      <path d="M6 9c0 6 2.5 10 6 12 3.5-2 6-6 6-12" />

      {/* mustache */}
      <path d="M9 11c.5 1 1.5 1.5 3 1.5s2.5-.5 3-1.5" />
    </svg>
  );
}
