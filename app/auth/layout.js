"use client"; // supaya tidak di-prerender
export const dynamic = "force-dynamic";

export const metadata = { title: "Auth | Makmur" };

export default function AuthLayout({ children }) {
  return (
    <div
      className="min-h-dvh grid place-items-center"
      style={{
        background: "linear-gradient(180deg, #2E8B57 0%, #A9F0C5 100%)",
      }}
    >
      {children}
    </div>
  );
}
