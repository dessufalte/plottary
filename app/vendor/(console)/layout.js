"use client";

import "../globals.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { href: "/vendor/dashboard",     label: "Dashboard",   icon: "mdi:view-dashboard-outline" },
  { href: "/vendor/products",      label: "Produk",      icon: "mdi:package-variant-closed" },
  { href: "/vendor/transactions",  label: "Transaksi",   icon: "mdi:cash-register" },
  { href: "/vendor/reviews",       label: "Ulasan",      icon: "mdi:comment-text-outline" },
  { href: "/vendor/profile",       label: "Profil Toko", icon: "mdi:store-outline" },
  { href: "/vendor/notifications", label: "Notifikasi",  icon: "mdi:bell-outline" },
];

// Judul & deskripsi berdasarkan prefix path
const pageMeta = [
  { match: "/vendor/dashboard",    title: "Dashboard",  desc: "Ringkasan penjualan & performa toko" },
  { match: "/vendor/products",     title: "Produk Saya",desc: "Kelola produk yang Anda jual" },
  { match: "/vendor/transactions", title: "Transaksi",  desc: "Scan dan validasi kupon pelanggan" },
  { match: "/vendor/reviews",      title: "Ulasan",     desc: "Lihat performa ulasan pelanggan" },
  { match: "/vendor/profile",      title: "Profil Toko",desc: "Kelola informasi toko Anda" },
  { match: "/vendor/notifications",title: "Notifikasi", desc: "Update pesanan, review, dan info penting" },
];

export default function VendorLayout({ children }) {
  const pathname = usePathname();
  const router   = useRouter();

  const handleLogout = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  const unreadCount = 3; // contoh badge

  const meta =
    pageMeta.find((p) => pathname?.startsWith(p.match)) ??
    { title: "Makmur Vendor", desc: "" };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white flex flex-col overflow-y-auto">
        <div className="flex items-center gap-2 px-6 pt-5 pb-3">
          <Image src="/logo.svg" alt="Makmur" width={28} height={28} priority />
          <div>
            <h1 className="font-semibold text-emerald-700 leading-tight">Makmur</h1>
            <p className="text-xs text-gray-500">Vendor Portal</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-6 pb-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-medium">W</div>
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
                className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
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
        {/* HEADER: judul + deskripsi kiri, notifikasi kanan (sejajar) */}
        <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
          <div className="mx-auto flex h-16 w-full max-w-10xl items-center justify-between px-6">
            <div className="min-w-0">
              <h2 className="truncate text-[18px] font-semibold text-gray-800">{meta.title}</h2>
              {meta.desc && (
                <p className="truncate text-sm text-gray-500">{meta.desc}</p>
              )}
            </div>

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
        </header>

        {/* Page content */}
        <div className="flex-1">{children}</div>
      </main>
    </div>
  );
}
