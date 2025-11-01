"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

// helper format rupiah
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

// status: 'expired' | 'eligible'
const products = [
  { id: 1, name: "Nasi Goreng",  category: "Siap Santap", priceNormal: 35000, priceDiscount: 15000, stock: 8,  minutesAgo: 9, image: "/nasi.png",  status: "eligible" },
  { id: 2, name: "Roti Croissant",category: "Roti & Kue",  priceNormal: 25000, priceDiscount: 10000, stock: 12, minutesAgo: 9, image: "/roti.png",  status: "expired"  },
  { id: 3, name: "Salad Bowl",    category: "Siap Santap", priceNormal: 45000, priceDiscount: 20000, stock: 5,  minutesAgo: 9, image: "/salad.png", status: "eligible" },
  { id: 4, name: "Donat Aneka",   category: "Roti & Kue",  priceNormal: 30000, priceDiscount: 12000, stock: 6,  minutesAgo: 9, image: "/donat.png", status: "expired"  },
];

const Badge = ({ status }) =>
  status === "expired" ? (
    <span className="ml-auto rounded-full bg-red-100 px-2 py-[2px] text-[11px] font-medium text-red-600">
      Kadaluarsa
    </span>
  ) : (
    <span className="ml-auto rounded-full bg-yellow-100 px-2 py-[2px] text-[11px] font-medium text-yellow-700">
      Layak
    </span>
  );

export default function ProductsPage() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Produk Saya</h2>
          <p className="text-sm text-gray-500">Kelola produk yang Anda jual</p>
        </div>
        <Link
          href="/vendor/products/add"
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
          <Icon icon="mdi:plus" width={18} />
          Tambah Produk
        </Link>
      </div>

      <p className="mb-4 text-sm text-gray-500">{products.length} produk aktif</p>

      {/* Grid 3 kolom (desktop) */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex gap-4 p-5">
              {/* gambar diperbesar */}
              <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>

              {/* info */}
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-[16px] font-semibold text-gray-800">{p.name}</h3>
                  <Badge status={p.status} />
                </div>
                <p className="mt-[2px] text-xs text-gray-500">{p.category}</p>

                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-[16px] font-semibold text-emerald-700">
                    {rupiah(p.priceDiscount)}
                  </span>
                  <span className="text-xs text-gray-400 line-through">{rupiah(p.priceNormal)}</span>
                </div>

                <div className="mt-1 flex items-center gap-5 text-xs text-gray-500">
                  <span>Stok: {p.stock}</span>
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:clock-outline" width={14} />
                    -{p.minutesAgo}m lagi
                  </span>
                </div>
              </div>
            </div>

            {/* actions */}
            <div className="border-t bg-gray-50 px-5 py-3">
              <div className="flex items-center gap-2">
                <Link
                  href={`/vendor/products/${p.id}/edit`}
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-white px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
                >
                  <Icon icon="mdi:pencil-outline" width={16} />
                  Edit
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <Icon icon="mdi:trash-can-outline" width={16} />
                  Hapus
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
