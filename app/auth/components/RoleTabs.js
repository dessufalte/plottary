"use client";
import { useEffect, useState } from "react";

export default function RoleTabs({ value, onChange }) {
  // agar tombol selalu sama lebar & ada thumb anim
  const [role, setRole] = useState(value ?? "buyer");

  useEffect(() => setRole(value), [value]);

  const select = (r) => {
    setRole(r);
    onChange?.(r);
  };

  return (
    <div className="relative w-full rounded-full bg-gray-200 p-1">
      {/* thumb */}
      <span
        className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-white shadow transition-transform duration-200 ${
          role === "buyer" ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden
      />
      <div className="relative grid grid-cols-2 text-sm font-medium">
        <button
          type="button"
          onClick={() => select("buyer")}
          className={`z-10 py-2 text-center rounded-full ${
            role === "buyer" ? "text-gray-900" : "text-gray-600"
          }`}
          aria-selected={role === "buyer"}
        >
          Pembeli
        </button>
        <button
          type="button"
          onClick={() => select("vendor")}
          className={`z-10 py-2 text-center rounded-full ${
            role === "vendor" ? "text-gray-900" : "text-gray-600"
          }`}
          aria-selected={role === "vendor"}
        >
          Vendor
        </button>
      </div>
    </div>
  );
}
