"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useMemo, useState } from "react";

// helper format rupiah
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

// status: 'expired' | 'eligible'
const initialProducts = [
  { id: 1, name: "Nasi Goreng",  category: "Siap Santap", stock: 8,  minutesAgo: 9, image: "/nasi.png",  status: "eligible" },
  { id: 2, name: "Roti Croissant",category: "Roti & Kue", stock: 12, minutesAgo: 9, image: "/roti.png",  status: "expired"  },
  { id: 3, name: "Salad Bowl",    category: "Siap Santap", stock: 5,  minutesAgo: 9, image: "/salad.png", status: "eligible" },
  { id: 4, name: "Donat Aneka Rasa",   category: "Roti & Kue", stock: 6,  minutesAgo: 9, image: "/donat.png", status: "expired"  },
];

const Badge = ({ status }) =>
  status === "expired" ? (
    <span className="ml-auto rounded-full bg-red-100 px-2 py-2px text-11px font-medium text-red-600">
      Kadaluarsa
    </span>
  ) : (
    <span className="ml-auto rounded-full bg-yellow-100 px-2 py-2 text-11 font-medium text-yellow-700">
      Layak
    </span>
  );

export default function ProductsPage() {
  const [products, setProducts] = useState(initialProducts);
  const [toDelete, setToDelete] = useState(null); // product object | null

  const count = useMemo(() => products.length, [products]);

  const handleConfirmDelete = () => {
    if (!toDelete) return;
    setProducts((list) => list.filter((p) => p.id !== toDelete.id));
    setToDelete(null);
  };

  return (
    <div className="p-8">
    {/* Header */}
    <div className="mb-6 flex items-center justify-between">
        {/* Kiri: jumlah produk aktif */}
        <p className="text-sm text-gray-500">{count} produk aktif</p>

        {/* Kanan: tombol tambah produk */}
        <Link
            href="/vendor/products/add"
            className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700"
        >
            <Icon icon="mdi:plus" width={18} />
            Tambah Produk
        </Link>
    </div>

      {/* Grid 3 kolom */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((p) => (
          <article
            key={p.id}
            className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex gap-4 p-5">
              <div className="h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="truncate text-[16px] font-semibold text-gray-800">{p.name}</h3>
                  <Badge status={p.status} />
                </div>
                <p className="mt-2 text-xs text-gray-500">{p.category}</p>

                <span className="flex items-center mt-2 mb-2 bg-[#2E8B57] text-white text-xs font-semibold px-2 py-1 w-32 rounded-full">
                  <Icon icon="mdi:ticket" width="24" height="24" className="text-white mr-3" />
                  2 Kupon
                </span>

                <div className="mt-1 flex items-center gap-5 text-xs text-gray-500">
                  <span>Stok: {p.stock}</span>
                  <span className="flex items-center gap-1">
                    <Icon icon="mdi:clock-outline" width={14} />
                    -{p.minutesAgo}m lagi
                  </span>
                </div>
              </div>
            </div>

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
                  onClick={() => setToDelete(p)}
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

      {/* ===== Modal Hapus ===== */}
      {toDelete && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setToDelete(null)}
          />
          {/* modal card */}
          <div className="absolute left-1/2 top-1/2 w-[min(640px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
            <div className="px-6 pt-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-red-100 text-red-600">
                  <Icon icon="mdi:alert-circle-outline" width={18} />
                </span>
                <h3 className="text-lg font-semibold text-gray-800">Hapus Produk?</h3>
              </div>
              <p className="text-sm text-gray-600">
                Anda yakin ingin menghapus produk ini? Tindakan ini tidak dapat dibatalkan.
              </p>

              {/* preview produk */}
              <div className="mt-4 rounded-xl border bg-gray-50 p-3">
                <div className="flex items-center gap-3">
                  <div className="h-14 w-16 overflow-hidden rounded-lg bg-gray-200">
                    <img src={toDelete.image} alt={toDelete.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-800">{toDelete.name}</p>
                    <p className="text-xs text-gray-500">{toDelete.category}</p>
                    <div className="mt-1 flex items-center gap-4 text-xs text-gray-600">
                      <span>
                        Rp <span className="font-semibold">{(toDelete.priceDiscount).toLocaleString("id-ID")}</span>
                      </span>
                      <span>•</span>
                      <span>Stok: {toDelete.stock}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* warning box */}
              <div className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm">
                <div className="mb-1 flex items-center gap-2 text-red-700">
                  <Icon icon="mdi:alert-outline" width={18} />
                  <span className="font-semibold">Perhatian:</span>
                </div>
                <ul className="ml-6 list-disc space-y-1 text-red-700">
                  <li>Produk akan dihapus dari katalog</li>
                  <li>Data penjualan tetap tersimpan di riwayat</li>
                  <li>Voucher yang sudah dibeli tetap valid</li>
                </ul>
              </div>
            </div>

            {/* actions */}
            <div className="flex items-center justify-end gap-3 px-6 py-4">
              <button
                onClick={() => setToDelete(null)}
                className="rounded-xl border bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmDelete}
                className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
              >
                <Icon icon="mdi:trash-can-outline" width={18} />
                Ya, Hapus Produk
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
