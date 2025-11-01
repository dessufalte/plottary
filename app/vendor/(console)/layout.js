"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/vendor/dashboard", label: "Dashboard", icon: "mdi:view-dashboard-outline" },
  { href: "/vendor/products", label: "Produk", icon: "mdi:package-variant-closed" },
  { href: "/vendor/transactions", label: "Transaksi", icon: "mdi:cash-register" },
  { href: "/vendor/reviews", label: "Ulasan", icon: "mdi:comment-text-outline" },
  { href: "/vendor/profile", label: "Profil Toko", icon: "mdi:store-outline" },
  { href: "/vendor/notifications", label: "Notifikasi", icon: "mdi:bell-outline" },
];

// mapping judul berdasarkan prefix path
const pageTitles = [
  { match: "/vendor/dashboard", title: "Dashboard" },
  { match: "/vendor/products", title: "Produk Saya" },
  { match: "/vendor/transactions", title: "Transaksi" },
  { match: "/vendor/reviews", title: "Ulasan" },
  { match: "/vendor/profile", title: "Profil Toko" },
  { match: "/vendor/notifications", title: "Notifikasi" },
];

export default function VendorLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  const unreadCount = 3; // contoh badge

  const activeTitle =
    pageTitles.find((p) => pathname?.startsWith(p.match))?.title ?? "Makmur Vendor";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white flex flex-col overflow-y-auto">
        <div className="flex items-center gap-2 px-6 pt-5 pb-3">
          <Image src="/logo.svg" alt="Makmur" width={28} height={28} priority />
          <div>
            <h1 className="leading-tight font-semibold text-emerald-700">Makmur</h1>
            <p className="text-xs text-gray-500">Vendor Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 pb-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-medium">
            W
          </div>
          <div>
            <p className="text-sm font-medium text-gray-800">Warung Berkah</p>
            <p className="text-xs text-gray-500">owner@warungberkah.com</p>
          </div>
        </div>

        <nav className="grow px-3 pb-2">
          {navItems.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors
                  ${
                    active
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-emerald-700"
                  }`}
              >
                <Icon icon={item.icon} width={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t bg-white px-6 py-4">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700"
          >
            <Icon icon="mdi:logout" width={18} />
            Keluar
          </button>
          <p className="mt-2 text-xs text-gray-400">Makmur v1.0.0</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="ml-64 min-h-screen overflow-x-hidden flex flex-col">
        {/* HEADER: judul kiri, notifikasi kanan (sejajar satu baris) */}
        <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
            {/* Judul halaman */}
            <h2 className="truncate text-base font-semibold text-gray-800">{activeTitle}</h2>

            {/* Aksi kanan: Notifikasi */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => router.push("/vendor/notifications")}
                className="relative inline-flex h-9 w-9 items-center justify-center rounded-full text-gray-600 hover:bg-gray-100"
                aria-label="Notifikasi"
                title="Notifikasi"
              >
                <Icon icon="mdi:bell-outline" width={20} />
                {unreadCount > 0 && (
                  <span className="absolute -right-0.5 -top-0.5 grid min-w-[18px] place-items-center rounded-full bg-red-500 px-1.5 text-[11px] font-semibold text-white">
                    {unreadCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* Konten halaman */}
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
