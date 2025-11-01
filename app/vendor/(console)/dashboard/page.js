"use client";
import { Icon } from "@iconify/react";

export default function DashboardVendor() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          <p className="text-sm text-gray-500">Jumat, 31 Oktober 2025</p>
        </div>
        <div className="relative">
          <Icon icon="mdi:bell-outline" width={22} className="text-gray-600 cursor-pointer" />
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-[10px] text-white grid place-items-center">3</span>
        </div>
      </div>

      {/* Total Pemasukan */}
      <div className="rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-500 p-6 text-white mb-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-80">Total Pemasukan</p>
            <h3 className="text-3xl font-semibold mt-1">Rp 1.450.000</h3>
          </div>
          <Icon icon="mdi:cash-multiple" width={26} />
        </div>

        <div className="mt-4 bg-white/15 rounded-xl p-3">
          <p className="text-sm">Makanan Diselamatkan</p>
          <p className="text-2xl font-semibold">12.3 kg</p>
          <p className="text-xs text-emerald-50 mt-1">
            Minggu ini <span className="text-emerald-200">+2.3 kg</span> dari minggu lalu
          </p>
        </div>
      </div>

      {/* Statistik ringkas */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { icon: "mdi:package-variant", label: "Produk Dijual", val: 15 },
          { icon: "mdi:cart-check", label: "Produk Terjual", val: 87 },
          { icon: "mdi:cube-outline", label: "Sisa Stok", val: 41 },
          { icon: "mdi:account-outline", label: "Total Pembeli", val: 62 },
        ].map((s) => (
          <div key={s.label} className="rounded-2xl bg-white p-4 text-center border shadow-sm">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon={s.icon} width={20} />
            </div>
            <h3 className="text-lg font-semibold">{s.val}</h3>
            <p className="text-sm text-gray-600">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Tren penjualan */}
      <div className="rounded-2xl bg-white p-5 border shadow-sm mb-6">
        <h3 className="font-semibold mb-4 flex items-center gap-2 text-gray-800">
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
              <div className="flex-1 mx-2 bg-gray-100 rounded-full h-2">
                <div className="h-2 bg-emerald-600 rounded-full" style={{ width: `${(d.val / 20) * 100}%` }} />
              </div>
              <span className="text-gray-600">{d.val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Aksi Cepat */}
      <div>
        <h3 className="font-semibold mb-4 text-gray-800">Aksi Cepat</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white p-4 border text-center shadow-sm hover:bg-gray-50 cursor-pointer">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon="mdi:package-variant-closed" width={20} />
            </div>
            <h4 className="font-medium text-gray-800">Tambah Produk</h4>
            <p className="text-sm text-gray-500">Buat menu baru</p>
          </div>

          <div className="rounded-2xl bg-white p-4 border text-center shadow-sm hover:bg-gray-50 cursor-pointer">
            <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon icon="mdi:qrcode-scan" width={20} />
            </div>
            <h4 className="font-medium text-gray-800">Scan QR</h4>
            <p className="text-sm text-gray-500">Validasi kupon</p>
          </div>
        </div>
      </div>
    </div>
  );
}
