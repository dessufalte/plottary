"use client";

import React from 'react';
import { useState } from 'react';
import SidebarLink from "../components/sideBar";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';

// --- DUMMY DATA ---
const DUMMY_PRODUCTS = [
  {
    id: 1,
    store: "Warung Berkah",
    rating: 4.5,
    time: "1m lalu",
    discount: 57,
    title: "Nasi Goreng Spesial",
    originalPrice: "Rp 35.000",
    discountedPrice: "Rp 15.000",
    stock: 8,
    image: "https://placehold.co/300x200/2E8B57/FFFFFF?text=Nasi+Goreng",
  },
  {
    id: 2,
    store: "Toko Roti Segar",
    rating: 4.8,
    time: "1m lalu",
    discount: 60,
    title: "Roti Croissant",
    originalPrice: "Rp 25.000",
    discountedPrice: "Rp 10.000",
    stock: 12,
    image: "https://placehold.co/300x200/A9F0C5/171717?text=Croissant",
  },
  {
    id: 3,
    store: "Kafe Hijau",
    rating: 4.6,
    time: "1m lalu",
    discount: 56,
    title: "Salad Bowl Organik",
    originalPrice: "Rp 45.000",
    discountedPrice: "Rp 20.000",
    stock: 5,
    image: "https://placehold.co/300x200/171717/A9F0C5?text=Salad+Bowl",
  },
  {
    id: 4,
    store: "Toko Roti Segar",
    rating: 4.7,
    time: "1m lalu",
    discount: 60,
    title: "Donat Aneka Rasa",
    originalPrice: "Rp 30.000",
    discountedPrice: "Rp 12.000",
    stock: 6,
    image: "https://placehold.co/300x200/2E8B57/FFFFFF?text=Donat",
  },
  {
    id: 5,
    store: "Warung Berkah",
    rating: 4.4,
    time: "1m lalu",
    discount: 55,
    title: "Ayam Geprek Jumbo",
    originalPrice: "Rp 40.000",
    discountedPrice: "Rp 18.000",
    stock: 10,
    image: "https://placehold.co/300x200/A9F0C5/171717?text=Ayam+Geprek",
  },
  {
    id: 6,
    store: "Kafe Hijau",
    rating: 4.5,
    time: "1m lalu",
    discount: 54,
    title: "Sandwich Ayam",
    originalPrice: "Rp 35.000",
    discountedPrice: "Rp 16.000",
    stock: 7,
    image: "https://placehold.co/300x200/171717/A9F0C5?text=Sandwich",
  },
];

// --- COMPONENTS ---

// Komponen Kartu Produk
const ProductCard = ({ product }) => (
  <Link 
  href={`/product/${product.id}`}
  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:scale-[1.01] cursor-pointer">
    {/* Gambar Produk */}
    <div className="relative">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/300x200/f0fdf4/2E8B57?text=${product.title.replace(
            /\s/g,
            "+"
          )}`;
        }}
      />
      {/* Label Diskon */}
      <div className="absolute top-0 right-0 bg-[#2E8B57] text-white text-xs font-semibold p-1 rounded-bl-lg">
        -{product.discount}%
      </div>
      {/* Label Waktu */}
      <div className="absolute top-0 left-0 bg-gray-900/60 text-white text-xs font-medium px-2 py-1 rounded-br-lg flex items-center">
        <Icon icon="mdi:clock-time-four" className="mr-1" />
        {product.time}
      </div>
    </div>

    {/* Detail Produk */}
    <div className="p-4">
      {/* Nama Toko & Rating */}
      <div className="flex items-center text-sm gap-2 text-gray-500 mb-1">
        <Icon icon="mynaui:location" width="24" height="24" />
        {product.store}
        <Icon icon="mdi:star" width="24" height="24" className="text-yellow-500" />
        {product.rating}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>

      {/* Harga & Status */}
      <div className="mt-2">
        <p className="text-sm text-gray-400 line-through">
          {product.originalPrice}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold text-[#2E8B57]">
            {product.discountedPrice}
          </p>
          <div className="flex items-center text-[#2E8B57] text-xs font-medium">
            Layak Konsumsi 
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-1">Stok: {product.stock} tersisa</p>
      </div>
    </div>
  </Link>
);

// --- MAIN COMPONENT ---
export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const categories = [
    "Semua",
    "Siap Santap",
    "Roti & Kue",
    "Minuman",
    "Sayuran",
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* START: Sidebar */}
      <aside className="w-64 flex flex-col justify-between bg-white border-r border-gray-200 p-6 shadow-lg">
        <div>
          {/* Logo & Judul */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-8">
                <Image src="images/logo.svg" alt="Makmur" width={28} height={28} />
                <div>
                <h1 className="font-semibold text-emerald-700">Makmur</h1>
                <p className="text-xs text-gray-500">Vendor Portal</p>
                </div>
            </div>
        </div>

          {/* Navigasi Utama */}
          <nav className="space-y-2">
            <SidebarLink href={"/home"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></g></svg>} text="Home" isActive={true} />
            <SidebarLink href={"/search"} icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l5.6 5.6q.275.275.275.7t-.275.7t-.7.275t-.7-.275l-5.6-5.6q-.75.6-1.725.95T9.5 16m0-2q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>} text="Cari Produk" isActive={false} />
          </nav>
        </div>

        {/* Footer Sidebar */}
        <div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2 text-red-600 text-sm font-medium hover:text-red-700 cursor-pointer">
              <Icon icon="material-symbols:logout-rounded" width="24" height="24" />
              Keluar
            </div>
          </div>
          <p className="text-sm text-gray-300 mt-4">Makmur v1.0.0</p>
        </div>
      </aside>
      {/* END: Sidebar */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header Dashboard */}
        <header className="flex justify-between items-center mb-8 mr-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Home</h2>
            <p className="text-sm text-gray-500">
              Temukan makanan hemat di sekitar Anda
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center gap-2 text-gray-600 text-sm mr-12">
                <Icon icon="mynaui:location" width="24" height="24" />
                Jakarta Pusat
            </div>
            <button className="text-gray-500 hover:text-[#2E8B57] transition-colors">
              <Icon icon="mingcute:notification-line" width="24" height="24" />
            </button>
          </div>
        </header>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="flex items-center gap-2 w-200 bg-gray-100 rounded-xl p-3">
            <Icon icon="material-symbols:search-rounded" width="24" height="24" style={{color: '#6B7280'}} />
            <input
              type="text"
              placeholder="Cari makanan atau toko..."
              className="w-full bg-transparent focus:outline-none text-gray-700"
            />
          </div>
        </div>

        {/* Promo Banner & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Promo Banner */}
          <div className="lg:col-span-2 bg-gradient-to-t from-primary to-secondary rounded-2xl p-6 pb-10">
            <h3 className="text-xl font-semiBold text-black mb-2">
              Selamatkan Makanan Hari Ini 🌱
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Hemat hingga 70% dan bantu kurangi *food waste*
            </p>
            <p className="text-sm text-primary bg-white w-72 text-center rounded-lg font-medium">
              *87 kg makanan diselamatkan minggu ini
            </p>
          </div>

          {/* Total Penghematan Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex flex-col justify-center">
            <div className="flex items-center text-gray-500 mb-1 gap-4">
              <Icon icon="iconamoon:trend-up-light" width="24" height="24"  style={{color: '#10B981'}}/>
              <span className="text-sm">Total Penghematan</span>
            </div>
            <h4 className="text-3xl font-bold text-gray-800">Rp 2.3 Juta</h4>
            <p className="text-xs text-[#2E8B57] mt-4">
              +15% minggu ini
            </p>
          </div>
        </div>

        {/* Kategori Filter */}
        <div className="flex space-x-3 overflow-x-auto pb-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-[#2E8B57] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Produk Tersedia */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Makanan Tersedia
          <span className="ml-3 text-sm font-normal text-gray-500">
            {DUMMY_PRODUCTS.length} produk ditemukan
          </span>
        </h3>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}