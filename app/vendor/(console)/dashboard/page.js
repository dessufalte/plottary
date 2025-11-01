"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function DashboardVendor() {
  return (
    <div className="p-8">
      {/* Total Pemasukan */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-white">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm opacity-80">Total Pemasukan</p>
            <h3 className="mt-1 text-3xl font-semibold">Rp 1.450.000</h3>
          </div>
          <Icon icon="mdi:cash-multiple" width={26} />
        </div>

        <div className="mt-4 rounded-xl bg-white/15 p-3">
          <p className="text-sm">Makanan Diselamatkan</p>
          <p className="text-2xl font-semibold">12.3 kg</p>
          <p className="mt-1 text-xs text-emerald-50">
            Minggu ini <span className="text-emerald-200">+2.3 kg</span> dari minggu lalu
          </p>
        </div>
      </div>

      {/* Statistik ringkas */}
      <div className="mb-6 grid grid-cols-4 gap-4">
        {[
          { icon: "mdi:package-variant", label: "Produk Dijual", val: 15 },
          { icon: "mdi:cart-check", label: "Produk Terjual", val: 87 },
          { icon: "mdi:cube-outline", label: "Sisa Stok", val: 41 },
          { icon: "mdi:account-outline", label: "Total Pembeli", val: 62 },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl border bg-white p-4 text-center shadow-sm"
          >
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon={s.icon} width={20} />
            </div>
            <h3 className="text-lg font-semibold">{s.val}</h3>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tren penjualan */}
      <div className="mb-6 rounded-2xl border bg-white p-5 shadow-sm">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-gray-800">
          <Icon icon="mdi:chart-line" width={20} className="text-emerald-600" />
          Tren Penjualan Minggu Ini
        </h3>
        <div className="space-y-2">
          {[
            { hari: "Sen", val: 12 },
            { hari: "Sel", val: 18 },
            { hari: "Rab", val: 15 },
            { hari: "Kam", val: 20 },
            { hari: "Jum", val: 16 },
            { hari: "Sab", val: 8 },
            { hari: "Min", val: 6 },
          ].map((d) => (
            <div key={d.hari} className="flex items-center justify-between text-sm">
              <span className="w-8">{d.hari}</span>
              <div className="mx-2 h-2 flex-1 rounded-full bg-gray-100">
                <div
                  className="h-2 rounded-full bg-emerald-600"
                  style={{ width: `${(d.val / 20) * 100}%` }}
                />
              </div>
              <span className="text-gray-600">{d.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aksi Cepat */}
      <div>
        <h3 className="mb-4 font-semibold text-gray-800">Aksi Cepat</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Tambah Produk → /vendor/products/add */}
          <Link
            href="/vendor/products/add"
            className="group rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:scale-[1.01] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon="mdi:package-variant-closed" width={20} />
            </div>
            <h4 className="font-medium text-gray-800">Tambah Produk</h4>
            <p className="text-sm text-gray-500">Buat menu baru</p>
          </Link>

          {/* Scan QR → /vendor/transactions */}
          <Link
            href="/vendor/transactions"
            className="group rounded-2xl border bg-white p-4 text-center shadow-sm transition hover:scale-[1.01] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-emerald-300"
          >
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon="mdi:qrcode-scan" width={20} />
            </div>
            <h4 className="font-medium text-gray-800">Scan QR</h4>
            <p className="text-sm text-gray-500">Validasi kupon</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
