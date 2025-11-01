"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function VendorProfilePage() {
  const router = useRouter();

  const handleLogout = () => {
    // Jika kamu punya sistem auth, hapus token di sini:
    // localStorage.removeItem("vendorToken");
    router.push("/auth/login"); // Arahkan ke halaman login
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Profil Toko</h2>
        <p className="text-sm text-gray-500">Kelola informasi toko Anda</p>
      </div>

      {/* Header Gradient */}
      <div className="mb-6 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 to-emerald-400 p-8 text-white">
        <div className="flex items-center gap-6">
          <div className="relative">
            <div className="grid h-24 w-24 place-items-center rounded-full bg-white/20 text-3xl font-semibold">
              W
            </div>
            <button
              className="absolute -right-1 -bottom-1 grid h-8 w-8 place-items-center rounded-full bg-white text-emerald-700 shadow"
              title="Ganti foto"
            >
              <Icon icon="mdi:camera-outline" width={18} />
            </button>
          </div>

          <div>
            <div className="text-lg font-semibold">Warung Berkah</div>
            <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs">
              <Icon icon="mdi:store-outline" width={16} />
              Restoran
            </div>

            <div className="mt-2 flex items-center gap-1 text-sm">
              <Icon icon="mdi:star" width={18} className="text-amber-300" />
              <span className="font-medium">4.5</span>
              <span className="opacity-90">(127 ulasan)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Deskripsi & Informasi */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Deskripsi */}
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div className="font-semibold text-gray-800">Deskripsi Toko</div>
            <button
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              title="Edit deskripsi"
            >
              <Icon icon="mdi:pencil-outline" width={18} />
            </button>
          </div>
          <p className="text-sm text-gray-700">
            Restoran keluarga dengan masakan tradisional Indonesia yang lezat dan terjangkau.
          </p>
        </div>

        {/* Informasi Toko */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm">
          <div className="px-2 pb-2 pt-1 font-semibold text-gray-800">Informasi Toko</div>

          <div className="divide-y">
            {/* Alamat */}
            <button className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:map-marker-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Alamat</div>
                  <div className="text-sm text-gray-600">
                    Jl. Sudirman No. 123, Jakarta Pusat
                  </div>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width={20} className="text-gray-400" />
            </button>

            {/* Jam Operasional */}
            <button className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:clock-time-four-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Jam Operasional</div>
                  <div className="text-sm text-gray-600">08:00 - 20:00</div>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width={20} className="text-gray-400" />
            </button>

            {/* Kontak */}
            <button className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50">
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:phone-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Kontak</div>
                  <div className="text-sm text-gray-600">+62 812-3456-7890</div>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Tombol Logout */}
      <div className="mt-12">
        <button
          onClick={handleLogout}
          className="mx-auto block w-full max-w-3xl rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 hover:bg-red-100"
        >
          Keluar dari Akun Vendor
        </button>
      </div>
    </div>
  );
}
