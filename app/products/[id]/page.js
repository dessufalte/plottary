"use client";

import React from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

// Data Dummy untuk detail produk
const productDetail = {
  id: 'roti-croissant',
  name: 'Roti Croissant',
  store: 'Toko Roti Segar',
  rating: 4.8,
  reviews: 45,
  description: 'Croissant butter premium, dipanggang pagi ini.',
  imageUrl: 'https://placehold.co/600x400/DDA0DD/FFFFFF?text=Roti+Croissant',
  discountPercent: 60,
  normalPrice: 25000,
  discountPrice: 10000,
  stock: 12,
  validityDate: '29 Oktober 2025',
  validityTime: 'pukul 06.00',
  pickupDeadline: '29 Oktober 2025 pukul 17.00',
  isConsumable: true,
  // Simulasi ulasan
  reviewsData: [
    { name: 'Dewi Lestari', rating: 5, date: '28 Oktober 2025', comment: 'Croissantnya masih lembut dan harum! Cocok buat sarapan. Packaging juga rapih.', metrics: { rasa: 5, kebersihan: 5, kesegaran: 5 } },
    { name: 'Rina Wijaya', rating: 4, date: '27 Oktober 2025', comment: 'Enak, tapi teksturnya udah agak kurang crispy. Tapi harga segini sih oke banget!', metrics: { rasa: 4, kebersihan: 5, kesegaran: 4 } },
  ]
};

// Komponen Pembagi Rating Bintang
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center space-x-0.5">
      {/* Bintang penuh */}
      {[...Array(fullStars)].map((_, i) => (
        <Icon
          key={`full-${i}`}
          icon="mdi:star"
          width="20"
          height="20"
          className="text-yellow-500"
        />
      ))}

      {/* Setengah bintang */}
      {hasHalfStar && (
        <Icon
          icon="mdi:star-half-full"
          width="20"
          height="20"
          className="text-yellow-500"
        />
      )}

      {/* Bintang kosong */}
      {[...Array(emptyStars)].map((_, i) => (
        <Icon
          key={`empty-${i}`}
          icon="mdi:star-outline"
          width="20"
          height="20"
          className="text-gray-300"
        />
      ))}
    </div>
  );
};

// Komponen Metrik Ulasan
const ReviewMetrics = ({ metrics }) => (
  <div className="text-sm text-gray-600 mt-2 flex flex-wrap gap-x-4 gap-y-1">
    {Object.entries(metrics).map(([key, value]) => (
      <span key={key} className="capitalize">
        {key}: <span className="font-semibold">{value}/5</span>
      </span>
    ))}
  </div>
);

// Komponen Utama Halaman Detail
const ProductDetailPage = () => {
  const { 
    name, store, rating, reviews, description, imageUrl, 
    discountPercent, normalPrice, discountPrice, stock, 
    validityDate, validityTime, pickupDeadline, isConsumable, 
    reviewsData 
  } = productDetail;

  const savingAmount = normalPrice - discountPrice;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Navigasi */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
        <div className="max-w-4xl ml-10 px-4 py-4 flex items-center">
          <button 
            onClick={() => window.history.back()}
            className="text-gray-700 hover:text-gray-900 mr-4 flex gap-2 cursor-pointer"
          >
            <Icon icon="mdi:arrow-left" width="24" height="24" />
            <h1 className="text-lg font-medium">Kembali</h1>
          </button>
        </div>
      </header>

      <main className="mx-auto pt-20 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10">
          {/* Kolom Kiri: Gambar dan Detail Produk */}
          <div className="lg:col-span-1 space-y-6 lg:sticky top-24 self-start">
            {/* Bagian Gambar */}
            <div className="relative rounded-xl overflow-hidden shadow-lg lg:w-[800px]">
              <img 
                src="/images/croissant.png"
                alt="Roti Croissant" 
                className="w-full h-full object-cover"
               
              />
              <span className="absolute top-5 left-5 bg-primary text-white text-md font-bold px-6 py-4 rounded-xl shadow-md">
                Hemat {discountPercent}%
              </span>
            </div>
          </div>

          {/* Kolom Kanan: Informasi Waktu, Harga, dan Ulasan */}
          <div className="lg:col-span-1 space-y-6">

            {/* Bagian Deskripsi */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{name}</h2>
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Icon icon="mynaui:location" width="24" height="24" />
                <span className="mr-4 ml-2">{store}</span>
                <Icon icon="mdi:star" width="24" height="24" className="text-yellow-500" />
                <span className="ml-1 text-xs text-gray-500">({reviews} ulasan)</span>
                {isConsumable && (
                  <span className="ml-4 flex items-center text-xs font-semibold text-green-600">
                     Layak Konsumsi
                  </span>
                )}
              </div>
                <h3 className="text-lg font-bold text-gray-800">Deskripsi</h3>
                <p className="text-gray-700">{description}</p>
            </div>

            {/* Detail Waktu */}
            <div className="bg-white p-6 rounded-xl shadow space-y-4">           
              <div className="flex items-start text-gray-600">
                <div>
                  <p className="text-sm font-semibold">Tanggal Produksi</p>
                  <p className="text-md font-medium text-gray-800">{validityDate} {validityTime}</p>
                </div>
              </div>

              <div className="flex items-start text-gray-600">
                <div>
                  <p className="text-sm font-semibold text-red-600">Batas Kelayakan</p>
                  <p className="text-md font-medium text-gray-800">{pickupDeadline}</p>
                </div>
              </div>
            </div>

            {/* Detail Harga dan Penghematan */}
            <div className="bg-gradient-to-l from-secondary to-white p-6 rounded-xl">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Harga</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Harga Normal</span>
                  <span className="line-through">Rp {normalPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-green-700">
                  <span>Harga Hemat</span>
                  <span>Rp {discountPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="border-t border-green-300 pt-3 flex justify-between font-bold text-green-900">
                  <span>Penghematan Anda</span>
                  <span>Rp {savingAmount.toLocaleString('id-ID')}</span>
                </div>
              </div>
            </div>

            {/* Syarat & Ketentuan */}
            <div className="bg-yellow p-6 rounded-xl">
              <h3 className="text-lg font-bold text-black mb-3">Syarat & Ketentuan</h3>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                <li>Kupon berlaku untuk $1$ porsi.</li>
                <li>Kupon tidak dapat diuangkan kembali.</li>
                <li>Tunjukkan QR code saat pengambilan.</li>
                <li>Ambil sebelum batas waktu berlaku.</li>
              </ul>
              <p className="mt-3 text-right text-sm font-semibold text-gray-700">
                Tersisa {stock} porsi
              </p>
            </div>

            {/* Ulasan Pembeli */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center">
                Ulasan Pembeli 
                <span className="ml-3 text-base text-yellow-600 flex items-center">
                  {rating} 
                </span>
                <span className="ml-2 text-sm text-gray-500">({reviews} ulasan)</span>
              </h3>
              
              <div className="space-y-6">
                {reviewsData.map((review, index) => (
                  <div key={index} className="border-t pt-4 first:border-t-0 first:pt-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mr-3">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">{review.name}</p>
                          <StarRating rating={review.rating} />
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <ReviewMetrics metrics={review.metrics} />
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </div>
      </main>

      {/* Footer Tombol Aksi */}
      <footer className="fixed bottom-0 left-0 w-full bg-white shadow-2xl p-4 border-t border-gray-100 z-10">
        <div className="max-w-4xl mx-auto flex justify-center">
          <button 
            onClick={() => console.log('Beli Kupon Sekarang ditekan')}
            className="w-full max-w-lg py-3 bg-green-700 text-white font-bold text-lg rounded-xl shadow-lg transition transform hover:bg-green-800 active:scale-[0.99]"
          >
            Beli Kupon Sekarang
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ProductDetailPage;
