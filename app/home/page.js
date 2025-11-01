"use client";

import React from 'react';
import { useState } from 'react';
import SidebarLink from "../components/sideBar";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../components/searchBar';

// --- DUMMY DATA ---
const DUMMY_PRODUCTS = [
  {
    id: 1,
    store: "Warung Berkah",
    rating: 4.5,
    time: "1m lalu",
    title: "Nasi Goreng Spesial",
    stock: 8,
    image: "/images/nasiGorengSpesial.png",
    coupons: 2,
  },
  {
    id: 2,
    store: "Toko Roti Segar",
    rating: 4.8,
    time: "1m lalu",
    title: "Roti Croissant",
    stock: 12,
    image: "/images/croissant.png",
    coupons: 1,
  },
  {
    id: 3,
    store: "Kafe Hijau",
    rating: 4.6,
    time: "1m lalu",
    title: "Salad Bowl Organik",
    stock: 5,
    image: "/images/saladBowlOrganik.png",
    coupons: 2,
  },
  {
    id: 4,
    store: "Toko Roti Segar",
    rating: 4.7,
    time: "1m lalu",
    title: "Donat Aneka Rasa",
    stock: 6,
    image: "/images/donatAnekaRasa.png",
    coupons: 1,
  },
  {
    id: 5,
    store: "Warung Berkah",
    rating: 4.4,
    time: "1m lalu",
    title: "Ayam Geprek Jumbo",
    stock: 10,
    image: "/images/ayamGeprekJumbo.png",
    coupons: 2,
  },
  {
    id: 6,
    store: "Kafe Hijau",
    rating: 4.5,
    time: "1m lalu",
    title: "Sandwich Ayam",
    stock: 7,
    image: "/images/sandwichAyam.png",
    coupons: 2,
  },
];

// --- COMPONENTS ---

// Komponen BELI KUPON MAKMUR  ---
const BeliKuponMakmur = () => (
    <div className="p-4 lg:p-6 bg-[#2E8B57] rounded-xl text-white shadow-lg flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
            {/* Ikon Kupon */}
            <div className="bg-white/30 p-3 rounded-full flex items-center justify-center">
                <Icon icon="lucide:ticket" width="24" height="24" />
            </div>
            {/* Teks Kupon */}
            <div>
                <h3 className="text-lg font-semibold">Beli Kupon Makmur</h3>
                <p className="text-sm opacity-90">Dapatkan kupon untuk membeli makanan hemat</p>
            </div>
        </div>
        {/* Tombol Beli Kupon */}
        <Link href="/buyCoupon" className="flex items-center gap-2 bg-white text-[#2E8B57] font-semibold py-2 px-4 rounded-full shadow-md transition-transform hover:scale-105 active:scale-95">
            <Icon icon="ic:round-plus" width="24" height="24" />
            Beli Kupon
        </Link>
    </div>
);

// Komponen Kartu Produk
const ProductCard = ({ product }) => (
  <Link 
  href={`/products/${product.id}`}
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
        <Icon
          icon="mdi:star"
          width="16"
          height="16"
          className="text-yellow-500 ml-2"
        />
        {product.rating}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 mb-2">
        {product.title}
      </h3>

      {/* Bagian Kupon & Status */}
      <div className="flex justify-between items-center mt-3">
        {/* Kupon */}
        <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-lg border border-emerald-100">
          <Icon icon="mdi:ticket-percent-outline" width="16" height="16" />
          <span>{product.coupons}</span>
        </div>

        {/* Status */}
        <div className="flex items-center text-[#2E8B57] text-xs font-medium bg-emerald-50 px-2 py-1 rounded-lg">
          Layak
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-2">Stok: {product.stock} tersisa</p>
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
    <div className="md:ml-64 bg-gray-50">
      {/* START: Sidebar */}
      <SidebarLink />
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
          <SearchBar />
        </div>

        <BeliKuponMakmur />

        {/* Promo Banner & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          {/* Promo Banner */}
          <div className="lg:col-span-2 bg-linear-to-t from-primary to-secondary rounded-2xl p-6 pb-10">
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