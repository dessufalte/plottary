export default function GoogleButton({ label="Masuk dengan Google" }) {
  return (
    <button
      type="button"
      className="w-full rounded-xl border px-4 py-3 flex items-center justify-center gap-2 bg-white"
    >
      {/* ikon google sederhana (placeholder) */}
      <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
        <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.8 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.6 6.1 29 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c10 0 19-7.3 19-20 0-1.2-.1-2.3-.4-3.5z"/>
        <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 16.7 18.9 14 24 14c3 0 5.7 1.1 7.8 2.9l5.7-5.7C33.6 6.1 29 4 24 4 16.2 4 9.5 8.4 6.3 14.7z"/>
        <path fill="#4CAF50" d="M24 44c5.2 0 10-1.9 13.6-5.1l-6.3-5.3C29.3 36 26.8 37 24 37c-5.2 0-9.6-3.4-11.2-8.1l-6.5 5C9.4 39.6 16.1 44 24 44z"/>
        <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.6-4.2 6.1-7.3 7.6l6.3 5.3C37.7 38.6 41 32.9 41 24c0-1.2-.1-2.3-.4-3.5z"/>
      </svg>
      <span className="text-sm font-medium"> {label} </span>
    </button>
  );
}
