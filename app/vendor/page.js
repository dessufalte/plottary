"use client";
import React from "react";
import { Icon } from "@iconify/react";

const Circle = ({ name, size = 22 }) => (
  <span className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-emerald-100 text-emerald-700">
    <Icon icon={name} width={size} height={size} />
  </span>
);

export default function VendorPage() {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">
      {/* ===== HERO ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2 ">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                <Icon icon="mdi:store-outline" width={18} height={18} />
              </span>
              <span>Makmur Vendor Portal</span>
            </span>

            <h1 className="mt-4 text-black text-4xl font-semibold leading-tight">
              Selamat Datang,{" "}
              <span className="text-emerald-700">Warung Barokah</span>! 👋
            </h1>
            <p className="mt-3 max-w-prose text-gray-600">
              Kurangi pemborosan makanan, tingkatkan pendapatan, dan raih lebih
              banyak pelanggan.{" "}
              <span className="text-emerald-700">
                Solusi cerdas untuk bisnis F&amp;B Anda.
              </span>
            </p>

            <a
              href="/vendor/dashboard"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-white hover:opacity-95"
            >
              Mulai Kelola Toko
              <Icon icon="mdi:arrow-right" width={18} />
            </a>
          </div>

          <div className="relative  mt-8">
            <img
              src="/hero.png"
              alt="Hero"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute bottom-1 left-8 rounded-xl bg-white px-4 py-3 text-sm text-emerald-700 shadow-xl ring-1 ring-emerald-100">
              <div className="text-[11px] text-gray-600">Revenue Increase</div>
              <div className="text-lg font-semibold">+43%</div>
            </div>
          </div>
        </div>

        {/* ===== STATISTIK ===== */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: "mdi:store-outline", val: "2,500+", label: "Vendor Aktif" },
            { icon: "mdi:chart-line", val: "43%", label: "Kenaikan Revenue" },
            {
              icon: "mdi:account-group-outline",
              val: "10K+",
              label: "Pelanggan Baru/Bulan",
            },
            { icon: "mdi:cash-multiple", val: "0%", label: "Biaya Bergabung" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-primary bg-secondary p-6 text-center"
            >
              <Circle name={m.icon} />
              <div className="text-2xl font-semibold text-primary">
                {m.val}
              </div>
              <div className="text-sm text-black mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CARA KERJA ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-6 mt-8">
        <h2 className="mb-8 text-center text-xl text-black font-semibold">
          Cara Kerja untuk Vendor
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              img: "/step-upload.png",
              title: "Upload Produk",
              desc: "Tambahkan produk surplus Anda dengan harga diskon.",
              icon: "mdi:package-variant-closed",
            },
            {
              img: "/step-expose.png",
              title: "Raih Pelanggan",
              desc: "Produk Anda otomatis tampil di platform dan dibeli pelanggan.",
              icon: "mdi:account-group-outline",
            },
            {
              img: "/step-analytics.png",
              title: "Pantau Performa",
              desc: "Lihat statistik penjualan dan validasi transaksi real-time.",
              icon: "mdi:chart-box-outline",
            },
          ].map((s, i) => (
            <article
              key={s.title}
              className="relative overflow-hidden rounded-2xl border bg-white shadow-sm"
            >
              {/* angka kiri atas */}
              <div className="absolute top-3 left-3 z-10 grid h-8 w-8 place-items-center rounded-full bg-primary text-white text-sm font-semibold shadow">
                {i + 1}
              </div>

              {/* gambar + ikon */}
              <div className="relative">
                <img
                  src={s.img}
                  alt={s.title}
                  className="h-44 w-full object-cover"
                />
                <div className="absolute bottom-1 left-2 grid h-9 w-9 place-items-center rounded-xl bg-white text-emerald-700 shadow">
                  <Icon icon={s.icon} width={20} height={20} />
                </div>
              </div>

              <div className="p-5 text-center">
                <h3 className="font-semibold text-black">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-400">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== MENGAPA BERGABUNG ===== */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-linear-to-b from-primary to-[#1A6D42] p-8 text-emerald-50">
          <h2 className="mb-6 text-center text-xl font-semibold">
            Mengapa Bergabung dengan Makmur?
          </h2>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
            {[
              {
                icon: "mdi:cash-multiple",
                t: "Tingkatkan Revenue",
                d: "Ubah produk surplus jadi pendapatan tambahan.",
              },
              {
                icon: "mdi:flash-outline",
                t: "Mudah & Cepat",
                d: "Upload produk hanya butuh 2 menit.",
              },
              {
                icon: "mdi:account-group-outline",
                t: "Jangkau Pelanggan Baru",
                d: "Akses 10.000+ pengguna aktif Makmur.",
              },
              {
                icon: "mdi:shield-outline",
                t: "Aman & Terpercaya",
                d: "Pembayaran otomatis & dukungan 24/7.",
              },
              {
                icon: "mdi:chart-box-outline",
                t: "Analytics Real-time",
                d: "Pantau performa toko Anda setiap saat.",
              },
              {
                icon: "mdi:earth",
                t: "Dampak Positif",
                d: "Bantu kurangi food waste & jaga bumi.",
              },
            ].map((r) => (
              <div key={r.t} className="flex ml-10 items-center gap-3 mb-10">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                  <Icon icon={r.icon} width={20} height={20} />
                </span>
                <div>
                  <div className="font-semibold">{r.t}</div>
                  <p className="text-white/90 text-sm">{r.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FITUR ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-4 text-center text-xl font-semibold">
          Fitur Lengkap untuk Vendor
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {[
            {
              t: "Manajemen Produk",
              d: "Tambah, edit, hapus produk dan atur stok real-time.",
              icon: "mdi:package-variant-closed",
            },
            {
              t: "QR Scanner",
              d: "Validasi kupon pelanggan dengan QR code.",
              icon: "mdi:qrcode-scan",
            },
            {
              t: "Dashboard Analytics",
              d: "Visualisasi penjualan & tren performa.",
              icon: "mdi:chart-box-outline",
            },
            {
              t: "Profil Toko",
              d: "Kelola info toko & foto untuk menarik pelanggan.",
              icon: "mdi:storefront-outline",
            },
          ].map((f) => (
            <div
              key={f.t}
              className="rounded-2xl border bg-white p-6 text-center shadow-sm"
            >
              <Circle name={f.icon} />
              <div className="mt-2 font-semibold text-black">{f.t}</div>
              <p className="mt-1 text-sm text-gray-500">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border bg-white p-8 text-center">
          <h3 className="text-2xl text-black font-semibold">
            Siap Mengembangkan Bisnis Anda?
          </h3>
          <p className="mt-1 text-lg text-gray-500">
            Mulai jual produk surplus dan tingkatkan revenue hari ini!
          </p>
          <a
            href="/vendor/dashboard"
            className="mx-auto mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-4 text-white hover:opacity-95"
          >
            Mulai Kelola Toko Sekarang
            <Icon icon="mdi:arrow-right" width={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
