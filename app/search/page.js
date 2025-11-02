"use client";

import React from 'react';
import { useState } from 'react';
import SidebarLink from "../components/sideBar";
import { Icon } from "@iconify/react";
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from "../components/searchBar";

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
    image: "/images/nasiGorengSpesial.png",
    coupons: 2,
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
    image: "/images/croissant.png",
    coupons: 1,
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
    image: "/images/saladBowlOrganik.png",
    coupons: 2,
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
    image: "/images/donatAnekaRasa.png",
    coupons: 1,
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
    image: "/images/ayamGeprekJumbo.png",
    coupons: 2,
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
    image: "/images/sandwichAyam.png",
    coupons: 2,
  },
];

// --- COMPONENTS ---

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
        <Icon icon="mdi:star" width="24" height="24" className="text-yellow-500" />
        {product.rating}
      </div>

      <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
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
export default function SearchPage() {
  return (
    <div className="md:ml-64 bg-gray-50">
      {/* START: Sidebar */}
      <SidebarLink />
      {/* END: Sidebar */}

      {/* START: Content / Main Search Page */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header Search */}
        <header className="flex justify-between items-center mb-8 mr-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">Cari Produk</h2>
            <p className="text-sm text-gray-500">
              Cari makanan atau toko favorit Anda
            </p>
          </div>

            <div className="flex items-center space-x-4">
                <button className="text-gray-500 hover:text-[#2E8B57] transition-colors">
                <Icon icon="mingcute:notification-line" width="24" height="24" />
                </button>
            </div>
        </header>

        {/* Search Bar & Filter */}
        <div className="flex space-x-4 mb-8">
          <SearchBar />
          <button className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-700 font-medium hover:bg-gray-100 transition-colors shadow-sm">
            
            Filter
          </button>
        </div>

        {/* Hasil Pencarian */}
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Hasil Pencarian
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
      {/* END: Content / Main Search Page */}
    </div>
  );
}