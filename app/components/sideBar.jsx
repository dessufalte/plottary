"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";

function SidebarLink({ href, icon, text }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors ${
        isActive
          ? "bg-emerald-600 text-white"
          : "text-gray-600 hover:bg-gray-100 hover:text-emerald-600"
      }`}
    >
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Tombol toggle di mobile */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow">
        <div className="flex items-center gap-2">
          <Image src="/images/logo.svg" alt="Makmur" width={28} height={28} />
          <h1 className="font-semibold text-emerald-700">Makmur</h1>
        </div>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <Icon icon={isOpen ? "mdi:close" : "mdi:menu"} width="28" height="28" />
        </button>
      </div>

      {/* Overlay saat sidebar terbuka di mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 flex flex-col justify-between bg-white border-r border-gray-200 p-6 shadow-lg transform transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div>
          {/* Logo & Judul */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
              <Image src="/images/logo.svg" alt="Makmur" width={28} height={28} />
              <div>
                <h1 className="text-lg font-semibold text-emerald-700">Makmur</h1>
                <p className="text-sm text-gray-500">Vendor Portal</p>
              </div>
            </div>
          </div>

          {/* Navigasi Utama */}
          <nav className="space-y-2">
            <SidebarLink
              href="/home"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  </g>
                </svg>
              }
              text="Home"
            />
            <SidebarLink
              href="/search"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
                  />
                </svg>
              }
              text="Cari Produk"
            />
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div>
          <div className="border-t border-gray-200 pt-4">
            <Link href={"/auth/login"} className="flex items-center gap-2 text-red-600 text-sm font-medium hover:text-red-700 cursor-pointer">
              <Icon
                icon="material-symbols:logout-rounded"
                width="24"
                height="24"
              />
              Keluar
            </Link>
          </div>
          <p className="text-sm text-gray-300 mt-4">Makmur v1.0.0</p>
        </div>
      </aside>
    </>
  );
}
