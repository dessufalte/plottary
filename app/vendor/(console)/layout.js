"use client";

import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/vendor/dashboard",   label: "Dashboard",   icon: "mdi:view-dashboard-outline" },
  { href: "/vendor/products",    label: "Produk",      icon: "mdi:package-variant-closed" },
  { href: "/vendor/transactions",label: "Transaksi",   icon: "mdi:cash-register" },
  { href: "/vendor/reviews",     label: "Ulasan",      icon: "mdi:comment-text-outline" },
  { href: "/vendor/profile",     label: "Profil Toko", icon: "mdi:store-outline" },
];

export default function VendorLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR: fixed, full-height, scrollable sendiri */}
      <aside
        className="
          fixed left-0 top-0 z-40 w-64 h-screen
          bg-white border-r flex flex-col
          overflow-y-auto overscroll-contain
          [padding-bottom:env(safe-area-inset-bottom)]
        "
      >
        {/* Brand */}
        <div className="flex items-center gap-2 px-6 pt-5 pb-3 shrink-0">
          <Image src="/logo.svg" alt="Makmur" width={28} height={28} priority />
          <div>
            <h1 className="font-semibold text-emerald-700 leading-tight">Makmur</h1>
            <p className="text-xs text-gray-500">Vendor Portal</p>
          </div>
        </div>

        {/* User */}
        <div className="flex items-center gap-3 px-6 pb-4 shrink-0">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 font-medium">
            B
          </div>
          <div>
            <p className="font-medium text-gray-800 text-sm">Budi Santoso</p>
            <p className="text-xs text-gray-500">budi.santoso@email.com</p>
          </div>
        </div>

        {/* Menu (biarkan tinggi fleksibel agar sidebar bisa scroll penuh) */}
        <nav className="px-3 pb-2 grow">
          {navItems.map((item) => {
            const active = pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`mb-1 flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium
                  ${active ? "bg-emerald-100 text-emerald-700" : "text-gray-600 hover:bg-gray-100"}`}
              >
                <Icon icon={item.icon} width={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer (tetap terbawa scroll sidebar) */}
        <div className="px-6 py-4 border-t shrink-0 bg-white">
          <Link
            href="/vendor"
            className="flex items-center gap-2 text-red-600 text-sm font-medium hover:text-red-700"
          >
            <Icon icon="mdi:logout" width={18} />
            Keluar
          </Link>
          <p className="mt-2 text-xs text-gray-400">Makmur v1.0.0</p>
        </div>
      </aside>

      {/* AREA KONTEN: geser sesuai lebar sidebar, konten yang scroll */}
      <main className="ml-64 min-h-screen overflow-x-hidden">{children}</main>
    </div>
  );
}
