"use client";

import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

// Komponen Fungsional untuk format harga
const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

// Data Dummy untuk Simulasi
const DUMMY_PRODUCT = {
    id: 1,
    name: "Salad Bowl Organik",
    vendor: "Kafe Hijau",
    rating: 4.6,
    imageUrl: "/images/saladBowlOrganik.png",
    description: "Salad segar dengan sayuran organik dan dressing pilihan. Cocok untuk diet sehat Anda.",
    couponCount: 2,
    stock: 4,
    vendorInitial: "K",
    pickupTime: "09:00 - 16:00",
    validUntil: "29 Oktober 2025 pukul 16.00",
    vendorLocation: "Kafe Hijau",
    savedAmount: 45000 - 20000,
};

const VendorCard = ({ product }) => {
  const router = useRouter(); 
  
  const handleVendorClick = () => {
    console.log(`Navigasi ke Detail Toko: /vendors/${product.vendorId}`);
    router.push(`/storeDetail/${product.vendorId}`);
  };

  return (
    <button
      onClick={handleVendorClick}
      className="w-full bg-white p-4 my-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between transition hover:shadow-md active:bg-gray-50 cursor-pointer"
    >
      <div className="flex items-center gap-3">
        {/* Lingkaran Inisial Vendor */}
        <div className="w-10 h-10 bg-linear-to-b from-[#2E8B57] to-[#A3D9B8] bg-opacity-10 text-white rounded-full flex items-center justify-center font-bold">
          {product.vendorInitial}
        </div>
        
        {/* Detail Toko */}
        <div className="text-left">
          <h3 className="font-medium text-gray-800 ml-2">{product.vendor}</h3>
          <div className="flex items-center text-sm text-gray-500 gap-2 mt-0.5">
            <Icon icon="mynaui:location" width="24" height="24"  style={{color: '#2E8B57'}} />
            <span>Lihat detail toko</span>
            <Icon icon="material-symbols:star" width="24" height="24"  style={{color: "ecc94b"}} />
            <span>{product.rating}</span>
          </div>
        </div>
      </div>
      
      {/* Tombol Panah */}
      <Icon icon="material-symbols:chevron-right-rounded" width="24" height="24" />
    </button>
  );
};

// --- Komponen Utama ---
export default function ProductDetailPage() {
    const product = DUMMY_PRODUCT;
    const router = useRouter();

    const handleBuyCoupon = () => {
        console.log(`Beli kupon untuk produk: ${product.name}`);
        router.push(`/checkout?productId=${product.id}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center">
            
            <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
                <div className="max-w-4xl ml-10 px-4 py-4 flex items-center">
                  <button 
                    onClick={() => window.history.back()}
                    className="text-gray-700 hover:text-gray-900 mr-4 flex gap-4 cursor-pointer"
                  >
                    <Icon icon="mdi:arrow-left" width="24" height="24" />
                    <h1 className="text-lg font-medium">Detail Produk</h1>
                  </button>
                </div>
            </header>

            <main className="flex-1 w-full max-w-4xl pt-16 pb-10">
                
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    
                    {/* Gambar Produk */}
                    <div className="relative">
                        <img 
                            src={product.imageUrl} 
                            alt={product.name} 
                            className="w-full object-cover max-h-96" 
                            onError={(e) => e.target.src = 'https://placehold.co/600x400/90EE90/333333?text=Gambar+Tidak+Tersedia'}
                        />
                        <span className="absolute top-4 right-4 bg-primary text-white text-sm font-bold px-2 py-1 rounded-lg">
                            -{product.discountPercentage}%
                        </span>
                    </div>

                    {/* Konten Detail */}
                    <div className="p-6 space-y-6">
                        
                        {/* Nama & Harga */}
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-medium text-gray-900">{product.name}</h2>
                                <div className="flex gap-2 items-center text-sm text-gray-500 mt-1">
                                    <Icon icon="mynaui:location" width="24" height="24"  style={{color: '#2E8B57'}} />
                                    <span>{product.vendor}</span>
                                    <span className="mx-2">•</span>
                                    <span className="flex items-center text-yellow-500">
                                        ★ {product.rating} <span className="text-gray-400 ml-1">({product.couponCount} Kupon)</span>
                                    </span>
                                </div>
                            </div>
                            <span className="flex items-center bg-[#2E8B57] text-white text-xs font-semibold px-2 py-1 rounded-full ml-4">
                            <Icon icon="mdi:ticket" width="24" height="24" className="text-white mr-3" />
                            2 Kupon
                            </span>
                        </div>

                        {/* Kartu Toko (VendorCard) */}
                        <VendorCard product={product} />

                        {/* Alert Hemat */}
                        <div className="bg-yellow-100 border border-yellow-500 text-yellow-800 p-3 rounded-md">
                            <p className="flex items-center text-sm font-medium gap-4">
                                Hemat {formatRupiah(product.savedAmount)} dengan kupon ini!
                            </p>
                        </div>

                        {/* Waktu Pickup & Berlaku Hingga */}
                        <div className="grid grid-cols-2 gap-4 bg-gray-100 p-4 rounded-lg">
                            <div className="gap-4 flex items-center text-sm text-gray-700">
                                <Icon icon="tabler:clock" width="24" height="24"  style={{color: '#232323'}} />
                                <div>
                                    <p className="font-medium">Jam Pickup</p>
                                    <p>{product.pickupTime}</p>
                                </div>
                            </div>
                            <div className="gap-4 flex items-center text-sm text-gray-700">
                                <Icon icon="material-symbols:check-rounded" width="24" height="24"  style={{color: '#232323'}} />
                                <div>
                                    <p className="font-medium">Batas Kelayakan</p>
                                    <p>{product.validUntil}</p>
                                </div>
                            </div>
                        </div>

                        {/* Lokasi Pickup */}
                        <div className="pt-2">
                            <h3 className="text-md font-semibold text-gray-800 mb-2">Lokasi Pickup</h3>
                            <div className="gap-4 bg-gray-100 p-3 rounded-lg flex items-center text-gray-700">
                                <Icon icon="mynaui:location" width="24" height="24"  style={{color: '#2E8B57'}} />
                                {product.vendorLocation}
                            </div>
                        </div>

                        {/* Deskripsi & Sisa Porsi */}
                        <div className="pt-2 pb-4">
                            <h3 className="text-md font-semibold text-gray-800 mb-2">Deskripsi</h3>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            
                            {/* Sisa Porsi Alert */}
                            <div className="bg-yellow-100 border border-yellow-500 text-yellow-800 p-3 rounded-md">
                                <p className="text-sm font-medium">
                                    Tersisa {product.stock} porsi
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleBuyCoupon}
                            className="w-full py-3 bg-[#2E8B57] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-emerald-700 transition duration-200"
                        >
                            Beli dengan Kupon
                        </button>

                    </div>
                </div>
            </main>
        </div>
    );
}
