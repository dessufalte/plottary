"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";
import { useMemo, useRef, useState } from "react";

export default function AddProductPage() {
  const router = useRouter();
  const fileRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    desc: "",
    category: "",
    price: "",
    discount: "",
    stock: "",
  });
  const [photo, setPhoto] = useState(null);        // File object
  const [photoUrl, setPhotoUrl] = useState("");    // Preview URL
  const [errors, setErrors] = useState({});        // field -> message

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onPickPhoto = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setPhoto(f);
    setPhotoUrl(URL.createObjectURL(f));
  };

  // ---------- VALIDATION ----------
  const validate = () => {
    const e = {};
    const { name, desc, category, price, discount, stock } = form;

    if (!photo) e.photo = "Wajib unggah foto produk.";
    if (!name.trim()) e.name = "Nama produk wajib diisi.";
    if (!desc.trim()) e.desc = "Deskripsi wajib diisi.";
    if (!category) e.category = "Pilih kategori.";

    const p = Number(price);
    const d = Number(discount);
    const s = Number(stock);

    if (!price) e.price = "Harga normal wajib diisi.";
    else if (isNaN(p) || p <= 0) e.price = "Harga normal harus lebih dari 0.";

    if (!discount) e.discount = "Harga hemat wajib diisi.";
    else if (isNaN(d) || d <= 0) e.discount = "Harga hemat harus lebih dari 0.";
    else if (!isNaN(p) && d >= p)
      e.discount = "Harga hemat harus lebih kecil dari harga normal.";

    if (!stock) e.stock = "Jumlah stok wajib diisi.";
    else if (isNaN(s) || s <= 0 || !Number.isInteger(s))
      e.stock = "Stok harus bilangan bulat > 0.";

    return e;
  };

  const isFormValid = useMemo(() => {
    const e = validate();
    return Object.keys(e).length === 0;
  }, [form, photo]);

  const discountAdvice = useMemo(() => {
    const p = Number(form.price);
    const d = Number(form.discount);
    if (!p || !d || isNaN(p) || isNaN(d)) return null;

    const ratio = d / p;
    // saran non-blokir: 40–70% dari harga normal
    if (ratio < 0.4 || ratio > 0.7) {
      return "Saran: harga hemat idealnya 40–70% dari harga normal.";
    }
    return null;
  }, [form.price, form.discount]);

  const onSubmit = (e) => {
    e.preventDefault();
    const eMap = validate();
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return; // stop kalau belum valid

    // TODO: kirim ke API di masa depan (FormData berisi file & field)
    // Simulasi sukses lalu kembali ke daftar
    router.push("/vendor/products");
  };

  return (
    <div className="p-8">
      {/* Back + title */}
      <div className="mb-6 flex items-center gap-3">
        <Link
          href="/vendor/products"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-gray-100"
          title="Kembali"
        >
          <Icon icon="mdi:arrow-left" width={20} />
        </Link>
        <h2 className="text-lg font-semibold text-gray-800">Tambah Menu</h2>
      </div>

      <form className="space-y-5" onSubmit={onSubmit} noValidate>
        {/* Upload area */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Foto Produk *
          </label>

          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={onPickPhoto}
          />

          <div
            onClick={() => fileRef.current?.click()}
            className={`flex h-44 w-full cursor-pointer items-center justify-center rounded-xl border border-dashed ${
              errors.photo ? "border-red-300 bg-red-50/50" : "border-gray-300 bg-white"
            } text-center text-gray-500`}
          >
            {photoUrl ? (
              <img
                src={photoUrl}
                alt="Preview"
                className="h-full w-full rounded-xl object-cover"
              />
            ) : (
              <div className="flex flex-col items-center">
                <Icon
                  icon="mdi:cloud-upload-outline"
                  width={26}
                  className="text-gray-400"
                />
                <p className="mt-1 text-sm">Klik untuk upload foto</p>
              </div>
            )}
          </div>
          {errors.photo && (
            <p className="mt-1 text-sm text-red-600">{errors.photo}</p>
          )}
        </div>

        {/* Nama */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Nama Produk *
          </label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Contoh: Nasi Goreng Spesial"
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
              errors.name ? "bg-red-50 border-red-300" : "bg-gray-50"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Deskripsi */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Deskripsi *
          </label>
          <textarea
            name="desc"
            value={form.desc}
            onChange={onChange}
            placeholder="Jelaskan produk Anda..."
            rows={3}
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
              errors.desc ? "bg-red-50 border-red-300" : "bg-gray-50"
            }`}
          />
          {errors.desc && (
            <p className="mt-1 text-sm text-red-600">{errors.desc}</p>
          )}
        </div>

        {/* Kategori */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Kategori *
          </label>
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
              errors.category ? "bg-red-50 border-red-300" : "bg-gray-50"
            }`}
          >
            <option value="">Pilih kategori</option>
            <option>Siap Santap</option>
            <option>Roti & Kue</option>
            <option>Minuman</option>
            <option>Lainnya</option>
          </select>
          {errors.category && (
            <p className="mt-1 text-sm text-red-600">{errors.category}</p>
          )}
        </div>

        {/* Harga */}
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Harga Normal *
            </label>
            <input
              type="number"
              min="1"
              name="price"
              value={form.price}
              onChange={onChange}
              placeholder="35000"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
                errors.price ? "bg-red-50 border-red-300" : "bg-gray-50"
              }`}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Harga Hemat *
            </label>
            <input
              type="number"
              min="1"
              name="discount"
              value={form.discount}
              onChange={onChange}
              placeholder="15000"
              className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
                errors.discount ? "bg-red-50 border-red-300" : "bg-gray-50"
              }`}
            />
            {errors.discount && (
              <p className="mt-1 text-sm text-red-600">{errors.discount}</p>
            )}
            {discountAdvice && !errors.discount && (
              <p className="mt-1 text-xs text-amber-600">{discountAdvice}</p>
            )}
          </div>
        </div>

        {/* Stok */}
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Jumlah Stok *
          </label>
          <input
            type="number"
            min="1"
            step="1"
            name="stock"
            value={form.stock}
            onChange={onChange}
            placeholder="10"
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring ${
              errors.stock ? "bg-red-50 border-red-300" : "bg-gray-50"
            }`}
          />
          {errors.stock && (
            <p className="mt-1 text-sm text-red-600">{errors.stock}</p>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-3 pt-2">
          <Link
            href="/vendor/products"
            className="inline-flex items-center justify-center rounded-xl border bg-white px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Batal
          </Link>
          <button
            type="submit"
            disabled={!isFormValid}
            className={`inline-flex items-center justify-center rounded-xl px-6 py-2.5 text-sm font-semibold text-white ${
              isFormValid
                ? "bg-emerald-600 hover:bg-emerald-700"
                : "bg-emerald-300 cursor-not-allowed"
            }`}
            title={!isFormValid ? "Lengkapi semua data & upload foto" : "Publish Produk"}
          >
            Publish Produk
          </button>
        </div>

        {/* Catatan penting */}
        <div className="rounded-2xl bg-yellow-50 p-5 text-sm text-yellow-800">
          <h4 className="mb-2 font-semibold">Catatan Penting</h4>
          <ul className="list-disc space-y-1 pl-5">
            <li>Pastikan batas kelayakan minimal 2 jam dari sekarang</li>
            <li>Foto produk harus jelas dan menarik</li>
            <li>Harga hemat disarankan 40–70% dari harga normal</li>
            <li>Produk harus layak konsumsi dan berkualitas baik</li>
          </ul>
        </div>
      </form>
    </div>
  );
}
