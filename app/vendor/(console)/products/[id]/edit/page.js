"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import { useMemo, useRef, useState } from "react";

// simulasi fetch berdasar id (di real case ambil dari API)
const getMockProduct = (id) => ({
  id,
  name: "Nasi Goreng Spesial",
  category: "Siap Santap",
  desc: "Jelaskan detail produk, bahan, dll.",
  price: 35000,
  discount: 15000,
  stock: 8,
  expired: true,
  photo: "/nasi.png",
});

export default function EditProductPage({ params }) {
  const router = useRouter();
  const fileRef = useRef(null);
  const p = getMockProduct(params.id);

  const [form, setForm] = useState({
    name: p.name,
    category: p.category,
    desc: p.desc,
    price: String(p.price),
    discount: String(p.discount),
    stock: String(p.stock),
    expired: p.expired,
  });
  const [photoUrl, setPhotoUrl] = useState(p.photo);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const onPickPhoto = (e) => {
    const f = e.target.files?.[0];
    if (f) setPhotoUrl(URL.createObjectURL(f));
  };

  const discountPct = useMemo(() => {
    const pr = Number(form.price);
    const dc = Number(form.discount);
    if (!pr || !dc) return 0;
    return Math.round((dc / pr) * 100);
  }, [form.price, form.discount]);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: kirim ke API
    router.push("/vendor/products");
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Back */}
      <div className="mb-6">
        <Link
          href="/vendor/products"
          className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
        >
          <Icon icon="mdi:arrow-left" width={18} />
          Kembali ke Daftar Produk
        </Link>
      </div>

      <h2 className="mb-1 text-xl font-semibold text-gray-800">Edit Produk</h2>
      <p className="mb-6 text-sm text-gray-500">Perbarui informasi produk Anda</p>

      <form onSubmit={onSubmit} className="grid gap-6 lg:grid-cols-[1fr_360px]">
        {/* Kolom kiri */}
        <div className="space-y-6">
          {/* Informasi Produk */}
          <section className="rounded-2xl bg-white p-5 shadow-sm border">
            <h3 className="mb-4 font-semibold text-gray-800">Informasi Produk</h3>

            <label className="mb-2 block text-sm font-medium text-gray-700">Nama Produk *</label>
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              className="mb-4 w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
              placeholder="Nama produk"
            />

            <label className="mb-2 block text-sm font-medium text-gray-700">Kategori *</label>
            <div className="relative mb-4">
              <select
                name="category"
                value={form.category}
                onChange={onChange}
                className="w-full appearance-none rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
              >
                <option>Siap Santap</option>
                <option>Roti & Kue</option>
                <option>Minuman</option>
                <option>Lainnya</option>
              </select>
              <Icon icon="mdi:chevron-down" width={18} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>

            <label className="mb-2 block text-sm font-medium text-gray-700">Deskripsi *</label>
            <textarea
              name="desc"
              value={form.desc}
              onChange={onChange}
              rows={3}
              className="w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
              placeholder="Jelaskan detail produk, bahan, dll."
            />
          </section>

          {/* Harga & Stok */}
          <section className="rounded-2xl bg-white p-5 shadow-sm border">
            <h3 className="mb-4 font-semibold text-gray-800">Harga & Stok</h3>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Harga Normal *</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Rp</span>
                  <input
                    name="price"
                    type="number"
                    min="1"
                    value={form.price}
                    onChange={onChange}
                    className="w-full rounded-xl border bg-gray-50 pl-8 pr-3 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
                    placeholder="35000"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Harga Diskon *</label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">Rp</span>
                  <input
                    name="discount"
                    type="number"
                    min="1"
                    value={form.discount}
                    onChange={onChange}
                    className="w-full rounded-xl border bg-gray-50 pl-8 pr-3 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
                    placeholder="15000"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Stok Tersedia *</label>
                <input
                  name="stock"
                  type="number"
                  min="0"
                  step="1"
                  value={form.stock}
                  onChange={onChange}
                  className="w-full rounded-xl border bg-gray-50 px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
                  placeholder="8"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="inline-flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="checkbox"
                    name="expired"
                    checked={form.expired}
                    onChange={onChange}
                    className="h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-600"
                  />
                  Kadaluarsa *
                </label>
              </div>
            </div>

            <p className="mt-3 text-xs text-red-600">
              {form.expired ? "Sudah kadaluarsa" : ""}
            </p>

            <div className="mt-4 rounded-xl bg-gray-100 px-4 py-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Hemat</span>
                <span className="font-medium text-emerald-700">
                  Rp {(Number(form.discount) || 0).toLocaleString("id-ID")}
                </span>
              </div>
              <div className="text-xs text-gray-500">Diskon {discountPct}%</div>
            </div>
          </section>
        </div>

        {/* Kolom kanan */}
        <aside className="space-y-6">
          {/* Foto Produk */}
          <section className="rounded-2xl bg-white p-5 shadow-sm border">
            <h3 className="mb-3 font-semibold text-gray-800">Foto Produk</h3>
            <div className="h-64 w-full overflow-hidden rounded-xl bg-gray-100">
              <img src={photoUrl} alt="Foto Produk" className="h-full w-full object-cover" />
            </div>

            <div className="mt-3 flex gap-2">
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-white px-4 py-2.5 text-sm font-medium text-emerald-700 hover:bg-emerald-50"
              >
                <Icon icon="mdi:cloud-upload-outline" width={18} />
                Ganti Foto
              </button>
              <input ref={fileRef} type="file" accept="image/*" hidden onChange={onPickPhoto} />
            </div>

            <p className="mt-2 text-center text-xs text-gray-500">PNG, JPG hingga 5MB</p>
          </section>

          {/* Tips */}
          <section className="rounded-2xl border bg-yellow-50 p-5 text-sm text-yellow-800">
            <div className="mb-2 flex items-center gap-2">
              <Icon icon="mdi:lightbulb-on-outline" width={18} />
              <span className="font-semibold">Tips Edit Produk</span>
            </div>
            <ul className="ml-5 list-disc space-y-1">
              <li>Update stok secara real-time</li>
              <li>Perpanjang waktu kadaluarsa jika masih fresh</li>
              <li>Sesuaikan harga diskon untuk menarik pembeli</li>
              <li>Foto menarik meningkatkan penjualan</li>
            </ul>
          </section>

          {/* Actions */}
          <div className="space-y-2">
            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Simpan Perubahan
            </button>
            <Link
              href="/vendor/products"
              className="block w-full rounded-xl border bg-white px-4 py-2.5 text-center text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Batal
            </Link>
          </div>
        </aside>
      </form>
    </div>
  );
}
