export const metadata = { title: "Vendor Home | Makmur" };

const metrics = [
  { label: "Vendor Aktif", value: "2,500+", icon: "🏪" },
  { label: "Kenaikan Revenue", value: "43%", icon: "📈" },
  { label: "Pelanggan Baru/Bulan", value: "10K+", icon: "👥" },
  { label: "Biaya Bergabung", value: "0%", icon: "💵" },
];

const steps = [
  {
    no: 1,
    img: "/step-upload.png", // taruh gambar di /public
    title: "Upload Produk",
    desc: "Tambahkan produk surplus dengan harga diskon. Atur foto, deskripsi, dan stok.",
    icon: "📦",
  },
  {
    no: 2,
    img: "/step-expose.png",
    title: "Raih Pelanggan",
    desc: "Produk tampil di platform. Ribuan pengguna siap membeli produk Anda.",
    icon: "🛍️",
  },
  {
    no: 3,
    img: "/step-analytics.png",
    title: "Pantau Performa",
    desc: "Scan QR pelanggan, validasi transaksi, dan lihat statistik real-time.",
    icon: "📊",
  },
];

const reasonsLeft = [
  { title: "Tingkatkan Revenue", desc: "Ubah surplus jadi pendapatan tambahan. Rata-rata vendor naik 43%." },
  { title: "Jangkau Pelanggan Baru", desc: "Akses ke 10.000+ pengguna aktif yang mencari produk hemat." },
  { title: "Analytics Real-time", desc: "Pantau penjualan, rating, dan performa toko kapan saja." },
];

const reasonsRight = [
  { title: "Mudah & Cepat", desc: "Dashboard intuitif, upload produk < 2 menit, scan & validasi otomatis." },
  { title: "Aman & Terpercaya", desc: "Pembayaran otomatis, sistem QR terenkripsi, dukungan 24/7." },
  { title: "Dampak Positif", desc: "Kurangi food waste sekaligus bantu selamatkan lingkungan." },
];

const features = [
  { title: "Manajemen Produk", desc: "Tambah, edit, hapus produk dan atur stok/ harga real-time.", icon: "🧰" },
  { title: "QR Scanner", desc: "Scan & validasi kupon pelanggan instan dengan QR.", icon: "� QR" },
  { title: "Dashboard Analytics", desc: "Grafik interaktif untuk tren dan performa penjualan.", icon: "📈" },
  { title: "Profil Toko", desc: "Kelola info toko, jam operasional, dan tampilan publik.", icon: "🏪" },
];

export default function VendorHome() {
  return (
    <div className="bg-gray-50">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-sm text-emerald-700 ring-1 ring-emerald-100">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Makmur Vendor Portal
            </span>

            <h1 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              Selamat Datang, <span className="text-emerald-700">Warung Barokah</span>! 👋
            </h1>
            <p className="mt-3 text-gray-600 max-w-prose">
              Kurangi pemborosan makanan, tingkatkan pendapatan, dan raih lebih banyak pelanggan.
              <span className="text-emerald-700"> Solusi cerdas untuk bisnis F&amp;B Anda.</span>
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="/vendor/products"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white hover:opacity-95"
              >
                Mulai Kelola Toko
                <span className="text-white">➜</span>
              </a>
              <a
                href="/vendor/reports"
                className="hidden md:inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-gray-700 hover:bg-white"
              >
                Lihat Analytics
              </a>
            </div>
          </div>

          {/* right image */}
          <div className="relative">
            <img
              src="/hero.png"
              alt="Vendor hero"
              className="w-full rounded-3xl object-cover shadow-xl"
            />
            <div className="absolute left-4 top-4 rounded-xl bg-white/90 px-3 py-2 text-sm text-emerald-700 shadow">
              Revenue Increase <span className="font-semibold">+43%</span>
            </div>
          </div>
        </div>

        {/* metrics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5"
            >
              <div className="text-2xl">{m.icon}</div>
              <div className="mt-3 text-2xl font-semibold text-emerald-800">{m.value}</div>
              <div className="text-sm text-emerald-700/80">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 pb-4">
        <h2 className="mb-4 text-xl font-semibold">Cara Kerja untuk Vendor</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.no} className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="relative">
                <img src={s.img} alt={s.title} className="h-40 w-full object-cover" />
                <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-emerald-600 px-3 py-1 text-xs text-white">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500">
                    {s.no}
                  </span>
                  {s.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{s.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* WHY JOIN (GREEN BLOCK) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-3xl bg-emerald-700 p-6 text-emerald-50">
          <h2 className="text-xl font-semibold">Mengapa Bergabung dengan Makmur?</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <ul className="space-y-4">
              {reasonsLeft.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                  <div>
                    <div className="font-medium">{r.title}</div>
                    <p className="text-emerald-100/90 text-sm">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <ul className="space-y-4">
              {reasonsRight.map((r) => (
                <li key={r.title} className="flex gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-300" />
                  <div>
                    <div className="font-medium">{r.title}</div>
                    <p className="text-emerald-100/90 text-sm">{r.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <h2 className="mb-4 text-xl font-semibold">Fitur Lengkap untuk Vendor</h2>
        <div className="grid gap-4 md:grid-cols-4 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <div className="text-2xl">{f.icon}</div>
              <div className="mt-3 font-semibold">{f.title}</div>
              <p className="mt-1 text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BOTTOM */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="items-center gap-6 rounded-3xl border bg-white p-6 md:flex">
          <div className="flex-1">
            <h3 className="text-lg font-semibold">Siap Mengembangkan Bisnis Anda?</h3>
            <p className="mt-1 text-gray-600">
              Mulai jual produk surplus dan tingkatkan revenue hari ini!
            </p>
          </div>
          <a
            href="/vendor/products"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-5 py-3 text-white hover:opacity-95 md:mt-0"
          >
            Mulai Kelola Toko Sekarang
            <span>➜</span>
          </a>
        </div>
      </section>
    </div>
  );
}
