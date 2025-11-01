"use client";
import { useEffect, useMemo, useState } from "react";
import { Icon } from "@iconify/react";

// helper
const rupiah = (n) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n || 0);

// --- dummy data transaksi hari ini
const initialTrans = [
  {
    id: "t1",
    product: "Nasi Goreng Spesial",
    buyer: "Budi S.",
    code: "MKM-001-ABC",
    time: "14:30",
    status: "Berhasil",
  },
  {
    id: "t2",
    product: "Ayam Geprek Jumbo",
    buyer: "Siti R.",
    code: "MKM-002-DEF",
    time: "13:15",
    status: "Berhasil",
  },
  {
    id: "t3",
    product: "Nasi Goreng Spesial",
    buyer: "Ahmad F.",
    code: "MKM-003-GHI",
    time: "12:00",
    status: "Berhasil",
  },
];

export default function TransactionsPage() {
  const [list, setList] = useState(initialTrans);

  // UI state
  const [showModal, setShowModal] = useState(false);
  const [scanState, setScanState] = useState("idle"); // idle | scanning | valid | invalid
  const [manual, setManual] = useState("");
  const [result, setResult] = useState(null); // {product, code, value}

  // open scanner
  const openScanner = () => {
    setResult(null);
    setScanState("scanning");
    setShowModal(true);
  };

  // simulasi "scan": pakai manual code atau random
  const simulateScan = (code) => {
    // aturan demo: kalau code berakhiran "ABC" -> valid, else -> invalid
    const isValid = (code || "").toUpperCase().endsWith("ABC");
    if (isValid) {
      setResult({
        product: "Nasi Goreng Spesial",
        code: code || "MKM-001-ABC",
        value: 15000,
      });
      setScanState("valid");
    } else {
      setResult({ code: code || "MKM-XXX-XXX" });
      setScanState("invalid");
    }
  };

  // klik tombol cari pada input manual
  const handleManualSubmit = () => {
    if (!manual.trim()) return;
    openScanner();
    // delay kecil biar kelihatan animasi modal
    setTimeout(() => simulateScan(manual.trim()), 700);
  };

  // tombol “Tandai Selesai”
  const markDone = () => {
    // tutup modal & reset state
    setShowModal(false);
    setScanState("idle");
    setResult(null);
    setManual("");     // biar input manual ikut kosong

    if (result?.code) {
      const tx = {
        id: crypto.randomUUID(),
        product: result.product || "Produk",
        buyer: "—",
        code: result.code,
        time: new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }),
        status: "Berhasil",
      };
      setList((prev) => [tx, ...prev]);
    }

  };

  // untuk demo: kalau user buka scanner tanpa input,
  // kita auto “memindai” setelah 1.2s dengan hasil valid
  useEffect(() => {
    if (showModal && scanState === "scanning" && !manual) {
      const t = setTimeout(() => simulateScan("MKM-001-ABC"), 1200);
      return () => clearTimeout(t);
    }
  }, [showModal, scanState, manual]);

  return (
    <div className="p-8">
    {/* Banner validasi */}
      <div className="mb-6 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-400 p-6 text-white">
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
            <Icon icon="mdi:qrcode-scan" width={22} />
          </span>
          <div>
            <div className="font-semibold">Validasi Kupon</div>
            <div className="text-sm opacity-90">Scan QR code pelanggan</div>
          </div>
        </div>

        <button
          onClick={openScanner}
          className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-sm hover:bg-white/25"
        >
          <Icon icon="mdi:scan-helper" width={18} />
          Buka Scanner
        </button>
      </div>

      {/* input manual */}
      <div className="mb-6 flex items-center gap-3">
        <div className="text-sm text-gray-600">Atau masukkan kode manual</div>
      </div>
      <div className="mb-8 flex items-center gap-3">
        <input
          value={manual}
          onChange={(e) => setManual(e.target.value)}
          placeholder="MKM-XXX-XXX"
          className="h-10 w-full rounded-xl border bg-gray-50 px-4 text-sm outline-none ring-emerald-200 focus:bg-white focus:ring"
        />
        <button
          onClick={handleManualSubmit}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-600 text-white hover:bg-emerald-700"
          title="Validasi kode"
        >
          <Icon icon="mdi:magnify" width={18} />
        </button>
      </div>

      {/* list transaksi hari ini */}
      <div className="mb-3 text-sm font-medium text-gray-800">Transaksi Hari Ini</div>
      <div className="space-y-3">
        {list.map((t) => (
          <div
            key={t.id}
            className="flex items-center justify-between rounded-2xl border bg-white p-4 shadow-sm"
          >
            <div>
              <div className="font-medium text-gray-800">{t.product}</div>
              <div className="text-xs text-gray-500">{t.buyer}</div>
              <div className="text-xs text-gray-500">Kode: {t.code}</div>
            </div>
            <div className="flex items-center gap-4">
              <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700">
                {t.status}
              </span>
              <span className="text-xs text-gray-500">{t.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* =================== MODAL =================== */}
      {showModal && (
        <div className="fixed inset-0 z-50">
          {/* backdrop */}
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowModal(false)} />
          {/* card */}
          <div className="absolute left-1/2 top-1/2 w-[min(640px,92vw)] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white shadow-2xl">
            {/* header */}
            <div className="flex items-center justify-between border-b px-6 py-4">
              <div className="font-semibold">Scanner QR Code</div>
              <button
                onClick={() => setShowModal(false)}
                className="rounded-full p-1 text-gray-500 hover:bg-gray-100"
              >
                <Icon icon="mdi:close" width={18} />
              </button>
            </div>

            {/* body */}
            <div className="px-6 pb-6 pt-5">
              {/* SCANNING VIEW */}
              {scanState === "scanning" && (
                <>
                  <div className="mx-auto grid h-80 w-full max-w-md place-items-center rounded-xl bg-[#1f1f1f]">
                    <div className="h-48 w-48 rounded-lg border-4 border-dashed border-white/70" />
                    <div className="mt-6 text-sm text-white/80">Arahkan kamera ke QR code…</div>
                  </div>
                </>
              )}

              {/* VALID VIEW */}
              {scanState === "valid" && (
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <Icon icon="mdi:check-bold" width={28} />
                  </div>
                  <div className="text-lg font-semibold text-gray-800">Kupon Valid!</div>
                  <div className="mb-5 text-sm text-emerald-700">Kupon dapat digunakan</div>

                  {/* detail box */}
                  <div className="mx-auto mb-5 max-w-md rounded-xl bg-gray-50 p-4 text-left">
                    <div className="text-xs text-gray-500">Produk</div>
                    <div className="mb-2 text-sm font-medium text-gray-800">
                      {result?.product}
                    </div>

                    <div className="text-xs text-gray-500">Kode Kupon</div>
                    <div className="mb-2 text-sm font-medium text-gray-800">{result?.code}</div>

                    <div className="text-xs text-gray-500">Nilai</div>
                    <div className="text-sm font-semibold text-emerald-700">
                      {rupiah(result?.value || 0)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={markDone}
                    className="mx-auto inline-flex w-full max-w-md items-center justify-center rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
                  >
                    Tandai Selesai
                  </button>
                </div>
              )}

              {/* INVALID VIEW */}
              {scanState === "invalid" && (
                <div className="text-center">
                  <div className="mx-auto mb-3 grid h-16 w-16 place-items-center rounded-full bg-red-100 text-red-600">
                    <Icon icon="mdi:close-thick" width={28} />
                  </div>
                  <div className="text-lg font-semibold text-gray-800">Kupon Tidak Valid</div>
                  <div className="mb-5 text-sm text-gray-600">
                    Kupon sudah digunakan atau kadaluarsa
                  </div>

                  <div className="mx-auto mb-5 max-w-md rounded-xl border border-yellow-200 bg-yellow-50 p-4 text-left text-sm text-yellow-900">
                    <div className="mb-1 font-semibold">Alasan:</div>
                    <ul className="ml-5 list-disc space-y-1">
                      <li>Kupon sudah pernah digunakan</li>
                      <li>Atau masa berlaku sudah habis</li>
                    </ul>
                  </div>

                  <button
                    onClick={() => {
                      setShowModal(false);
                      setScanState("idle");
                    }}
                    className="mx-auto inline-flex w-full max-w-md items-center justify-center rounded-xl border bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Tutup
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      {/* =============== END MODAL =============== */}
    </div>
  );
}
