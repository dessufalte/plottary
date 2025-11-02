"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const summary = [
  { key: "attention", label: "Butuh Perhatian", count: 2, color: "red" },
  { key: "orders", label: "Pesanan Baru", count: 1, color: "emerald" },
  { key: "reviews", label: "Review Baru", count: 1, color: "amber" },
];

const items = [
  {
    id: "n1",
    type: "danger",
    title: "Pesanan Baru Masuk",
    desc: '3 kupon "Nasi Goreng Spesial" berhasil terjual. Total: Rp 75.000',
    time: "2 menit lalu",
    action: { label: "Lihat Transaksi", icon: "mdi:arrow-right" },
    pill: { text: "Penting", color: "red" },
    unread: true,
  },
  {
    id: "n2",
    type: "danger",
    title: "Produk Hampir Kadaluarsa",
    desc: '"Roti Tawar Premium" akan kadaluarsa dalam 4 jam. Kurangi harga atau hapus produk.',
    time: "30 menit lalu",
    action: { label: "Edit Produk", icon: "mdi:pencil-outline" },
    pill: { text: "Penting", color: "red" },
    unread: true,
  },
  {
    id: "n3",
    type: "success",
    title: "Stok Produk Habis",
    desc: '"Kue Coklat Special" sudah habis terjual. Update stok atau hapus dari katalog.',
    time: "1 jam lalu",
    action: { label: "Update Stok", icon: "mdi:arrow-right" },
    pill: { text: "Sedang", color: "amber" },
  },
  {
    id: "n4",
    type: "success",
    title: "Review Baru dari Pelanggan",
    desc: 'Andi memberikan rating 5 bintang untuk "Nasi Uduk Komplit". Baca reviewnya!',
    time: "2 jam lalu",
    action: { label: "Lihat Review", icon: "mdi:arrow-right" },
    pill: { text: "Sedang", color: "amber" },
  },
  {
    id: "n5",
    type: "neutral",
    title: "Laporan Penjualan Harian",
    desc: "Hari ini Anda sudah menjual 15 produk dengan total Rp 450.000. Naik 25% dari kemarin!",
    time: "3 jam lalu",
    action: { label: "Lihat Statistik", icon: "mdi:arrow-right" },
    pill: { text: "Info", color: "gray" },
  },
  {
    id: "n6",
    type: "neutral",
    title: "Fitur Baru: Auto-Diskon",
    desc: "Sekarang Anda bisa mengatur auto-diskon untuk produk yang hampir kadaluarsa.",
    time: "1 hari lalu",
    action: { label: "Pelajari Lebih Lanjut", icon: "mdi:arrow-right" },
    pill: { text: "Info", color: "gray" },
  },
  {
    id: "n7",
    type: "neutral",
    title: "Pesanan Berhasil Diredeem",
    desc: 'Kupon "Bakso Spesial" telah diredeem oleh pelanggan. Konfirmasi telah dikirim.',
    time: "2 hari lalu",
    pill: { text: "Info", color: "gray" },
  },
];

const badgeColor = {
  red: "bg-red-100 text-red-700 ring-1 ring-red-200",
  amber: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  gray: "bg-gray-100 text-gray-700 ring-1 ring-gray-200",
};

const borderByType = {
  danger: "border-red-200 bg-red-50/40",
  success: "border-emerald-200 bg-emerald-50/40",
  neutral: "border-gray-200 bg-white",
};

export default function NotificationsPage() {
  const [tab, setTab] = useState("all");
  const [list, setList] = useState(items);

  const filtered = list.filter((n) => (tab === "unread" ? n.unread : true));
  const unreadCount = list.filter((n) => n.unread).length;

  const markAllRead = () =>
    setList((prev) => prev.map((x) => ({ ...x, unread: false })));
  const clearAll = () => setList([]);

  return (
    <div className="mx-auto max-w-6xl p-6">
      {/* Header actions */}
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-medium text-gray-800">{list.length}</span> notifikasi
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={markAllRead}
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
          >
            <Icon icon="mdi:check-all" width={18} />
            Tandai Semua Dibaca
          </button>
          <button
            onClick={clearAll}
            className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm text-red-600 hover:bg-red-50"
          >
            <Icon icon="mdi:trash-can-outline" width={18} />
            Hapus Semua
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-4 flex items-center gap-2">
        <button
          onClick={() => setTab("all")}
          className={`rounded-full px-3 py-1.5 text-sm ${
            tab === "all" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Semua <span className="ml-1 text-xs opacity-80">{list.length}</span>
        </button>
        <button
          onClick={() => setTab("unread")}
          className={`rounded-full px-3 py-1.5 text-sm ${
            tab === "unread" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          Belum Dibaca <span className="ml-1 text-xs opacity-80">{unreadCount}</span>
        </button>
      </div>

      {/* Summary chips */}
      <div className="mb-4 grid gap-4 sm:grid-cols-3">
        {summary.map((s) => (
          <div
            key={s.key}
            className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div className="flex items-center gap-3">
              <span
                className={`grid h-8 w-8 place-items-center rounded-full ${
                  s.color === "red"
                    ? "bg-red-100 text-red-700"
                    : s.color === "emerald"
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-amber-100 text-amber-700"
                }`}
              >
                {s.color === "red" && <Icon icon="mdi:alert-octagon-outline" width={18} />}
                {s.color === "emerald" && <Icon icon="mdi:cart-outline" width={18} />}
                {s.color === "amber" && <Icon icon="mdi:star-outline" width={18} />}
              </span>
              <div className="text-sm font-medium text-gray-700">{s.label}</div>
            </div>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-800">{s.count}</div>
            </div>
          </div>
        ))}
      </div>

      {/* List */}
      <div className="space-y-3">
        {filtered.map((n) => (
          <div
            key={n.id}
            className={`rounded-2xl border p-4 shadow-sm ${borderByType[n.type]}`}
          >
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-2">
                {/* dot unread */}
                <span
                  className={`mt-1 h-2.5 w-2.5 rounded-full ${
                    n.unread ? "bg-emerald-600" : "bg-gray-300"
                  }`}
                />
                <div className="text-sm font-semibold text-gray-800">{n.title}</div>
                {n.pill && (
                  <span
                    className={`ml-2 rounded-full px-2 py-0.5 text-xs ${badgeColor[n.pill.color]}`}
                  >
                    {n.pill.text}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-gray-400">
                <button className="rounded p-1 hover:bg-gray-100" title="Check">
                  <Icon icon="material-symbols:check-rounded" width={18} />
                </button>
                <button className="rounded p-1 hover:bg-gray-100" title="Hapus">
                  <Icon icon="mdi:trash-can-outline" width={18} />
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-700">{n.desc}</p>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-xs text-gray-500">{n.time}</span>
              {n.action && (
                <button className="inline-flex items-center gap-1 rounded-lg border px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                  {n.action.label}
                  <Icon icon={n.action.icon} width={16} />
                </button>
              )}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border bg-white p-10 text-center text-gray-500">
            Tidak ada notifikasi.
          </div>
        )}
      </div>
    </div>
  );
}
