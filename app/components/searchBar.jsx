"use client";

import { Icon } from "@iconify/react";
// --- Komponen Kartu Statistik ---
export default function SearchBar() {
    return (
     <div className="flex items-center w-200 gap-2 bg-gray-100 rounded-xl p-3">
        <Icon icon="material-symbols:search-rounded" width="24" height="24" style={{color: '#6B7280'}} />
        <input
            type="text"
            placeholder="Cari makanan atau toko..."
            className="w-full bg-transparent focus:outline-none text-gray-700"
        />  
    </div>
    );
}

