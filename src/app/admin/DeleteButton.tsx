"use client";

export default function DeleteButton() {
  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm("Delete this post? This cannot be undone.")) {
          e.preventDefault();
        }
      }}
      className="text-xs uppercase tracking-widest text-red-400 hover:text-red-300"
    >
      Delete
    </button>
  );
}
