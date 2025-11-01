"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function VendorProfilePage() {
  const router = useRouter();

  // --- Deskripsi (tetap, tapi tombol: Batal kiri, Simpan kanan) ---
  const [description, setDescription] = useState(
    "Restoran keluarga dengan masakan tradisional Indonesia yang lezat dan terjangkau."
  );
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [descDraft, setDescDraft] = useState(description);
  const [savingDesc, setSavingDesc] = useState(false);

  // --- Informasi Toko (nilai yang ditampilkan) ---
  const [address, setAddress] = useState("Jl. Sudirman No. 123, Jakarta Pusat");
  const [hours, setHours] = useState("08:00 - 20:00");
  const [contact, setContact] = useState("+62 812-3456-7890");

  // --- Modal: type = "address" | "hours" | "contact" | null ---
  const [modalType, setModalType] = useState(null);
  const [modalDraft, setModalDraft] = useState("");

  const handleLogout = () => {
    // localStorage.removeItem("vendorToken");
    router.push("/auth/login");
  };

  // ==== Deskripsi handlers ====
  const startEditDesc = () => {
    setDescDraft(description);
    setIsEditingDesc(true);
  };
  const cancelEditDesc = () => {
    setIsEditingDesc(false);
    setDescDraft(description);
  };
  const saveDesc = async () => {
    if (!descDraft.trim()) return;
    setSavingDesc(true);
    await new Promise((r) => setTimeout(r, 350));
    setDescription(descDraft.trim());
    setSavingDesc(false);
    setIsEditingDesc(false);
  };

  // ==== Modal handlers ====
  const openModal = (type) => {
    setModalType(type);
    if (type === "address") setModalDraft(address);
    if (type === "hours") setModalDraft(hours);
    if (type === "contact") setModalDraft(contact);
  };
  const closeModal = () => {
    setModalType(null);
    setModalDraft("");
  };
  const saveModal = async () => {
    const v = modalDraft.trim();
    if (!v) return;
    await new Promise((r) => setTimeout(r, 250)); // simulasi
    if (modalType === "address") setAddress(v);
    if (modalType === "hours") setHours(v);
    if (modalType === "contact") setContact(v);
    closeModal();
  };

  // ==== Komponen Modal ====
  const Modal = ({ title, children }) => (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={closeModal}
        aria-hidden
      />
      <div className="absolute inset-0 grid place-items-center p-4">
        <div className="w-full max-w-xl rounded-2xl bg-white p-5 shadow-xl">
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
            <button
              onClick={closeModal}
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
              aria-label="Tutup"
            >
              <Icon icon="mdi:close" width={18} />
            </button>
          </div>
          <p className="mb-4 text-sm text-gray-500">
            {modalType === "address" && "Perbarui alamat lengkap toko Anda"}
            {modalType === "hours" && "Perbarui jam operasional toko Anda"}
            {modalType === "contact" && "Perbarui nomor kontak toko Anda"}
          </p>

          {children}

          <div className="mt-4 flex items-center justify-between gap-3">
            {/* Batal kiri, Simpan kanan */}
            <button
              onClick={closeModal}
              className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              <Icon icon="mdi:close" width={16} className="mr-2" />
              Batal
            </button>
            <button
              onClick={saveModal}
              className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700"
            >
              <Icon icon="mdi:check" width={16} className="mr-2" />
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
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
            {!isEditingDesc && (
              <button
                onClick={startEditDesc}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
                title="Edit deskripsi"
              >
                <Icon icon="mdi:pencil-outline" width={18} />
              </button>
            )}
          </div>

          {!isEditingDesc ? (
            <p className="text-sm text-gray-700">{description}</p>
          ) : (
            <>
              <textarea
                value={descDraft}
                onChange={(e) => setDescDraft(e.target.value)}
                rows={4}
                placeholder="Masukkan deskripsi toko Anda..."
                className="w-full resize-y rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
              />
              <div className="mt-3 flex items-center justify-between gap-3">
                {/* Batal kiri, Simpan kanan */}
                <button
                  onClick={cancelEditDesc}
                  disabled={savingDesc}
                  className="inline-flex items-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-60"
                >
                  <Icon icon="mdi:close" className="mr-2" width={16} />
                  Batal
                </button>
                <button
                  onClick={saveDesc}
                  disabled={savingDesc || !descDraft.trim()}
                  className="inline-flex items-center rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-60"
                >
                  {savingDesc ? (
                    <>
                      <Icon icon="mdi:loading" className="mr-2 animate-spin" width={16} />
                      Menyimpan...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:check" className="mr-2" width={16} />
                      Simpan
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {/* Informasi Toko */}
        <div className="rounded-2xl border bg-white p-3 shadow-sm">
          <div className="px-2 pb-2 pt-1 font-semibold text-gray-800">Informasi Toko</div>

          <div className="divide-y">
            {/* Alamat */}
            <button
              onClick={() => openModal("address")}
              className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:map-marker-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Alamat</div>
                  <div className="text-sm text-gray-600">{address}</div>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width={20} className="text-gray-400" />
            </button>

            {/* Jam Operasional */}
            <button
              onClick={() => openModal("hours")}
              className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:clock-time-four-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Jam Operasional</div>
                  <div className="text-sm text-gray-600">{hours}</div>
                </div>
              </div>
              <Icon icon="mdi:chevron-right" width={20} className="text-gray-400" />
            </button>

            {/* Kontak */}
            <button
              onClick={() => openModal("contact")}
              className="flex w-full items-center justify-between gap-4 px-3 py-4 text-left hover:bg-gray-50"
            >
              <div className="flex items-start gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <Icon icon="mdi:phone-outline" width={18} />
                </span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Kontak</div>
                  <div className="text-sm text-gray-600">{contact}</div>
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

      {/* === RENDER MODAL SESUAI TIPE === */}
      {modalType === "address" && (
        <Modal title="Edit Alamat Toko">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Alamat Lengkap
          </label>
          <textarea
            rows={4}
            value={modalDraft}
            onChange={(e) => setModalDraft(e.target.value)}
            placeholder="Masukkan alamat lengkap toko..."
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
          />
          <p className="mt-2 text-xs text-gray-500">
            Masukkan alamat lengkap termasuk nama jalan, nomor, dan kota
          </p>
        </Modal>
      )}

      {modalType === "hours" && (
        <Modal title="Edit Jam Operasional">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Jam Operasional
          </label>
          <input
            type="text"
            value={modalDraft}
            onChange={(e) => setModalDraft(e.target.value)}
            placeholder="08:00 - 20:00"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
          />
          <p className="mt-2 text-xs text-gray-500">
            Format: HH:MM - HH:MM atau Senin–Jumat: HH:MM - HH:MM
          </p>
        </Modal>
      )}

      {modalType === "contact" && (
        <Modal title="Edit Kontak">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Nomor Kontak
          </label>
          <input
            type="text"
            value={modalDraft}
            onChange={(e) => setModalDraft(e.target.value)}
            placeholder="+62 812-3456-7890"
            className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
          />
          <p className="mt-2 text-xs text-gray-500">
            Masukkan nomor telepon yang dapat dihubungi pelanggan
          </p>
        </Modal>
      )}
    </div>
  );
}
