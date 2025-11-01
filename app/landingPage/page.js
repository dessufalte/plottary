"use client";

import React from 'react';
import StatCard from "../components/card";
import Link from "next/link";


// --- Komponen Kartu Cara Kerja ---
const StepCard = ({ number, title, description, imageUrl }) => (
  <div className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 h-full">
    <div className="relative mb-12">
      <img
        src={imageUrl}
        alt={`Langkah ${number}`}
        className="w-full h-48 object-cover rounded-lg"
        onError={(e) => {
          e.target.onerror = null; 
          e.target.src = `https://placehold.co/300x144/${colorClass.substring(1)}/FFFFFF?text=Gambar+${number}`;
        }}
      />
      <div className="absolute top-2 left-2 flex items-center justify-center w-12 h-12 bg-primary rounded-full font-bold text-lg text-white ">
        {number}
      </div>
    </div>
    <div className="px-4 pb-4">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  </div>
);

// --- Komponen Keuntungan/Fitur ---
const BenefitItem = ({ icon, title, description }) => (
  <div className="flex items-start mb-4">
    <div className="flex-shrink-0 mr-3 mt-1">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-white/80">{description}</p>
    </div>
  </div>
);


// --- KOMPONEN UTAMA LANDING PAGE ---
export default function Home() {

  return (
    <div className="min-h-screen pb-16 bg-[#F3F4F6]">
      {/* 1. SECTION HERO & HEADER */}
      <section className="container mx-auto px-4 py-12 md:py-16">
 
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Kolom Kiri: Teks dan CTA */}
          <div className="md:w-1/2">
            <div className='flex justify-center w-72 mb-8 gap-4 bg-[#A9F0C54D] p-6 rounded-full'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16669 16.667C7.70341 16.6714 6.2919 16.1257 5.21212 15.1382C4.13234 14.1506 3.46316 12.7933 3.3373 11.3354C3.21144 9.87755 3.6381 8.42563 4.53265 7.26761C5.4272 6.10959 6.7243 5.33008 8.16669 5.08366C12.9167 4.16699 14.1667 3.73366 15.8334 1.66699C16.6667 3.33366 17.5 5.15033 17.5 8.33366C17.5 12.917 13.5167 16.667 9.16669 16.667Z" stroke="#2E8B57" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1.66669 17.5C1.66669 15 3.20835 13.0333 5.90002 12.5C7.91669 12.1 10 10.8333 10.8334 10" stroke="#2E8B57" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <p className="text-[#2E8B57] text-sm font-semibold">Selamat Datang di Makmur</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Halo!🖐️
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Platform yang menghubungkan Anda dengan makanan berkualitas dengan harga hemat, sekaligus<span className='text-primary'> mengurangi pemborosan makanan</span> untuk masa depan yang lebih berkelanjutan.
            </p>
            <Link
              className="flex w-72 items-center px-6 py-4 font-semibold text-white rounded-lg shadow-md transition duration-300 bg-primary gap-2 hover:bg-green-700"
              href={"/home"}
            >
              Mulai Belanja Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="currentColor" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/>
              </svg>
            </Link>
          </div>

          {/* Kolom Kanan: Gambar Hero */}
          <div className="relative md:w-1/2 w-full h-120 rounded-xl overflow-hidden shadow-2xl">
            <img
              src="images/heroImage.png"
              alt="Penjual sedang melayani pelanggan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://placehold.co/600x400/D0F0C0/171717?text=Gambar+Hero";
              }}
            />
            {/* Tag Hemat */}
            <div className="absolute bottom-4 ml-4 bg-white px-6 py-8 rounded-lg shadow-xl font-bold text-md text-gray-700 border border-gray-200">
              Hemat Hingga
              <br />
              <span className='text-4xl text-primary'>70%</span>
              <br />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION STATISTIK */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            icon= {
            <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'><g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5'><path d='M20 11v5h-5'/><path d='m20 16l-5-5c-.883-.883-1.324-1.324-1.865-1.373a1.5 1.5 0 0 0-.27 0c-.541.05-.982.49-1.865 1.373s-1.324 1.324-1.865 1.373q-.135.012-.27 0c-.541-.05-.982-.49-1.865-1.373L4 8'/></g>
            </svg>
          }
            percentage="57%"
            description="Hemat Rata-rata"
          />
          <StatCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></g>
            </svg>
            }
            percentage="10,000+"
            description="Pengguna Aktif"
          />
          <StatCard
            icon={<svg xmlns="http://www.w3.org/2000/svg" width='32' height='32' viewBox="0 0 24 24"><path fill="currentColor" d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m-9 2h4v3.13l-1.45-1a1 1 0 0 0-1.1 0l-1.45 1Zm10 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3v5a1 1 0 0 0 .53.88a1 1 0 0 0 1-.05L12 8.2l2.45 1.63A1 1 0 0 0 16 9V4h3a1 1 0 0 1 1 1Z"/>
            </svg>}
            percentage="500+ Ton"
            description="Makanan Terselamatkan"
          />
        </div>
      </section>

      {/* 3. SECTION CARA KERJA */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
          Cara Kerja Makmur
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            number={1}
            title="Pilih Produk"
            description="Browse produk dari restoran, kafe, toko roti, dan toko bahan makanan yang menawarkan harga hemat hingga 70%."
            imageUrl="/images/pilihProduk.png"
          />
          <StepCard
            number={2}
            title="Beli Kupon"
            description="Bayar dengan mudah menggunakan e-wallet favorit Anda dan dapatkan kupon barcode/QR code."
            imageUrl="/images/beliKupon.png"
          />
          <StepCard
            number={3}
            title="Ambil & Nikmati"
            description="Tunjukkan QR code di vendor, ambil makanan Anda, dan nikmati kualitas terbaik sekaligus mengurangi food waste!"
            imageUrl="/images/ambilNikmati.png"
          />
        </div>
      </section>

      {/* 4. SECTION MENGAPA MEMILIH MAKMUR */}
      <section className="bg-gradient-to-l from-primary to-[#1A6D42] text-white py-16 rounded-3xl mx-6 md:mx-16 lg:mx-36">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-white text-center mb-10">
            Mengapa Memilih Makmur?
          </h2>
          <div className="flex justify-center  grid-cols-1 md:grid-cols-2 lg:gap-16 sm:gap-8 md:gap-12 lg:flex">
            {/* Kolom Kiri: Keuntungan User */}
              <div>
                <BenefitItem
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M13.5 16a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0"/><path fill="currentColor" d="m14.347.66l3.18 4.456l2.097-.715L21.538 10h.962v12h-21V10h.51v-.01l.648.006zM9.397 10h10.028l-1.037-3.033l-1.522.487zM7.839 8.417L15.55 5.79l-1.604-2.25zM5.5 12h-2v2a2 2 0 0 0 2-2m10 4a3.5 3.5 0 1 0-7 0a3.5 3.5 0 0 0 7 0m5 4v-2a2 2 0 0 0-2 2zm-2-8a2 2 0 0 0 2 2v-2zm-15 8h2a2 2 0 0 0-2-2z"/></svg>}
                  title="Hemat Hingga 70%"
                  description="Dapatkan makanan berkualitas dengan harga jauh lebih murah dari harga normal."
                />
                <BenefitItem
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512"><path fill="currentColor" d="M432 208H288l32-192L80 304h144l-32 192Z"/></svg>}
                  title="Cepat & Mudah"
                  description="Beli dan bayar kupon hanya dalam 90 detik, ambil di vendor terdekat."
                />
              </div>
            {/* Kolom Kanan: Dampak Lingkungan & Kepercayaan */}
              <div>
                <BenefitItem
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20" clip-rule="evenodd"/><path d="M4 24h40"/><path d="M24 44c4.418 0 8-8.954 8-20S28.418 4 24 4s-8 8.954-8 20s3.582 20 8 20" clip-rule="evenodd"/><path d="M9.858 10.142A19.94 19.94 0 0 0 24 16a19.94 19.94 0 0 0 14.142-5.858m0 27.716A19.94 19.94 0 0 0 24 32a19.94 19.94 0 0 0-14.142 5.858"/></g></svg>}
                  title="Selamatkan Bumi"
                  description="Bantu kurangi pemborosan makanan dan dampak lingkungan dari food waste."
                />
                <BenefitItem
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m-.232-5.36l5-6l-1.536-1.28l-4.3 5.159l-2.225-2.226l-1.414 1.414l3 3l.774.774z" clip-rule="evenodd"/></svg>}
                  title="Terpercaya"
                  description="Semua vendor terverifikasi dan produk dijamin layak konsumsi."
                />
              </div>
          </div>
        </div>
      </section>
      {/* 5. SECTION CTA AKHIR */}
      <section className="container rounded-2xl border-4 bg-white mx-auto mt-16 px-4 py-12 md:py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          Siap Mulai Berbelanja?
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Jelajahi ribuan produk hemat dari vendor terdekat sekarang!
        </p>
        <Link
         className="flex w-72 justify-center items-center mx-auto px-6 py-4 font-semibold text-white rounded-lg shadow-md transition duration-300 bg-primary gap-2 hover:bg-green-700"
              href={"/home"}
        >
          Lihat Produk Tersedia
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="currentColor" d="M10 8.5a.47.47 0 0 1-.35-.15c-.2-.2-.2-.51 0-.71l3.15-3.15l-3.15-3.15c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.5 3.5c.2.2.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"/>
          </svg>
        </Link>
      </section>
    </div>
  );
}
