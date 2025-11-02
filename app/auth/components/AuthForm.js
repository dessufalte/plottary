"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import RoleTabs from "./RoleTabs";
import GoogleButton from "./GoogleButton";

export default function AuthForm({ mode = "login", defaultRole = "buyer" }) {
  const router = useRouter();
  const q = useSearchParams();
  const next = q.get("next");
  const qRole = q.get("role"); // <- ambil role dari query

  // default role: query ?role=vendor > prop defaultRole > "buyer"
  const [role, setRole] = useState(qRole || defaultRole);

  const [vendorName, setVendorName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const goHome = () => router.replace("/landingPage");
  const goVendor = () => router.replace(next || "/vendor");

  const submitBuyer = (e) => { e.preventDefault(); goHome(); };
  const submitVendor = (e) => {
    e.preventDefault();
    document.cookie = `auth=true; Path=/; Max-Age=${60*60*24*7}`;
    document.cookie = `role=vendor; Path=/; Max-Age=${60*60*24*7}`;
    goVendor();
  };

  const isSignup = mode === "signup";

  return (
    <div>
      {/* Brand */}
      <div className="text-center mb-6">
        <div className="mx-auto mb-3 grid place-items-center">
          <img src="/images/logo.svg" alt="Makmur Logo" className="w-12 h-12" />
        </div>
        <h1 className="text-2xl text-black font-semibold">Makmur</h1>
        <p className="text-sm text-gray-600">Selamatkan makanan, hemat pengeluaran</p>
      </div>

      {/* Tabs Pembeli/Vendor */}
      <div className="mb-5">
        <RoleTabs value={role} onChange={setRole} />
      </div>

      {/* ===== MODE PEMBELI: 1 tombol saja (login & signup) ===== */}
      {role === "buyer" ? (
        <form onSubmit={submitBuyer} className="space-y-4">
          <button
            type="submit"
            className="w-full rounded-xl bg-[#2E8B57] px-4 py-3 text-white font-medium hover:opacity-95 active:opacity-90"
          >
            {isSignup ? "Lanjut sebagai Pembeli" : "Masuk sebagai Pembeli"}
          </button>
        </form>
      ) : (
        /* ===== MODE VENDOR ===== */
        <form onSubmit={submitVendor} className="space-y-4">
          {/* NAMA VENDOR hanya saat SIGN-UP */}
          {isSignup && (
            <div className="space-y-1">
              <label className="text-sm text-gray-700">Nama Vendor</label>
              <input
                className="w-full rounded-xl border px-3 py-3 placeholder-gray-500 text-black bg-gray-50"
                placeholder="Contoh: Warung Makmur"
                value={vendorName}
                onChange={(e) => setVendorName(e.target.value)}
                type="text"
                required
              />
            </div>
          )}

          <div className="space-y-1">
            <label className="text-sm text-gray-700">Email</label>
            <input
              className="placeholder-gray-500 text-black w-full rounded-xl border px-3 py-3 bg-gray-50"
              placeholder="vendor@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-gray-700">Password</label>
            <input
              className="placeholder-gray-500 text-black w-full rounded-xl border px-3 py-3 bg-gray-50"
              placeholder="••••••••"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              type="password"
              required
            />
          </div>

          <button
            
            type="submit"
            className="w-full rounded-xl bg-[#2E8B57] px-4 py-3 text-white font-medium hover:opacity-95 active:opacity-90"
          >
            {isSignup ? "Daftar sebagai Vendor" : "Masuk sebagai Vendor"}
          </button>

          {/* Login: tampilkan link & tombol Google; Signup: sesuai desain boleh tampil juga */}
          {!isSignup && (
            <>
              <div className="text-center">
                <a className="text-sm text-gray-600 hover:underline" href="#">
                  Lupa password?
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-gray-200" />
                <span className="text-xs text-gray-500">atau</span>
                <div className="h-px flex-1 bg-gray-200" />
              </div>
              <GoogleButton label="Masuk dengan Google" />
            </>
          )}

          <div className="pt-2 text-center text-sm">
            {isSignup ? (
              <span className="text-gray-600">
                Sudah punya akun?
                <a href="/auth/login" className="ml-1 font-medium text-[#2E8B57] hover:underline">
                  Masuk
                </a>
              </span>
            ) : (
              <span className="text-gray-600">
                Belum punya akun?
                <a href="/auth/signup?role=vendor" className="ml-1 font-medium text-[#2E8B57] hover:underline">
                  Daftar sekarang
                </a>
              </span>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
