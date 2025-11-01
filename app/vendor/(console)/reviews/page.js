"use client";

import { Icon } from "@iconify/react";
import { useMemo } from "react";

const stars = (value) =>
  Array.from({ length: 5 }, (_, i) => (
    <Icon
      key={i}
      icon={i < Math.round(value) ? "mdi:star" : "mdi:star-outline"}
      className="text-amber-400"
      width={18}
    />
  ));

export default function ReviewsPage() {
  // dummy statistik
  const counts = { 5: 45, 4: 18, 3: 4, 2: 2, 1: 0 };
  const total = useMemo(() => Object.values(counts).reduce((a, b) => a + b, 0), [counts]);
  const average = useMemo(
    () =>
      (
        (5 * counts[5] + 4 * counts[4] + 3 * counts[3] + 2 * counts[2] + 1 * counts[1]) /
        Math.max(total, 1)
      ).toFixed(1),
    [counts, total]
  );

  const reviews = [
    {
      id: 1,
      name: "Budi Santoso",
      date: "28/10/2025",
      rating: 5,
      text: "Enak banget! Masih segar dan porsinya banyak",
      sub: [
        { k: "Rasa", v: "5/5" },
        { k: "Kebersihan", v: "5/5" },
        { k: "Kesegaran", v: "4/5" },
      ],
    },
    {
      id: 2,
      name: "Siti Rahma",
      date: "28/10/2025",
      rating: 5,
      text: "Croissantnya crispy, worth it banget!",
      sub: [
        { k: "Rasa", v: "5/5" },
        { k: "Kebersihan", v: "5/5" },
        { k: "Kesegaran", v: "5/5" },
      ],
    },
  ];

  return (
    <div className="p-8">
      {/* Kartu ringkasan rating */}
      <div className="mb-6 grid gap-6 rounded-2xl border bg-white p-6 shadow-sm lg:grid-cols-[240px_1fr]">
        <div className="flex flex-col items-start lg:items-center">
          <div className="text-5xl font-semibold text-gray-800">{average}</div>
          <div className="mt-2 flex gap-1">{stars(Number(average))}</div>
          <div className="mt-2 text-sm text-gray-500">{total} ulasan</div>
        </div>

        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((s) => {
            const pct = total ? (counts[s] / total) * 100 : 0;
            return (
              <div key={s} className="grid grid-cols-[20px_1fr_32px] items-center gap-2">
                <span className="text-sm text-gray-600">{s}</span>
                <div className="h-2 rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-amber-400"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{counts[s]}</span>
              </div>
            );
          })}
        </div>
      </div>

        {/* KPIs */}
        <div className="mb-8 grid gap-4 md:grid-cols-3">
        {/* Positif */}
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-white p-6 shadow-sm text-center">
            <Icon icon="mdi:thumb-up-outline" width={28} className="text-emerald-600 mb-2" />
            <div className="text-3xl font-semibold text-gray-800">94%</div>
            <div className="mt-1 text-sm text-gray-600">Positif</div>
        </div>

        {/* Jumlah Ulasan */}
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-white p-6 shadow-sm text-center">
            <Icon icon="mdi:message-outline" width={28} className="text-emerald-600 mb-2" />
            <div className="text-3xl font-semibold text-gray-800">69</div>
            <div className="mt-1 text-sm text-gray-600">Ulasan</div>
        </div>

        {/* Minggu Ini */}
        <div className="flex flex-col items-center justify-center rounded-2xl border bg-white p-6 shadow-sm text-center">
            <Icon icon="mdi:trending-up" width={28} className="text-emerald-600 mb-2" />
            <div className="text-3xl font-semibold text-gray-800">+12%</div>
            <div className="mt-1 text-sm text-gray-600">Minggu Ini</div>
        </div>
        </div>

      {/* Ulasan terbaru */}
      <div className="mb-3 text-sm font-medium text-gray-800">Ulasan Terbaru</div>
      <div className="space-y-4">
        {reviews.map((r) => (
          <div key={r.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="mb-2 flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-medium text-gray-800">{r.name}</div>
                  <div className="mt-1 flex gap-1">{stars(r.rating)}</div>
                </div>
              </div>
              <div className="text-xs text-gray-500">{r.date}</div>
            </div>
            <p className="text-sm text-gray-700">{r.text}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {r.sub.map((s) => (
                <span
                  key={s.k}
                  className="rounded-lg bg-gray-100 px-3 py-1 text-xs text-gray-700"
                >
                  {s.k}: {s.v}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
