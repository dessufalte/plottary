'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';


// Data Dummy untuk Paket Kupon
const COUPON_PACKAGES = [
    {
        id: 1,
        coupons: 1,
        price: 8000,
        discount: 60,
        title: "1 Kupon",
        subtitle: "Coba dulu paket hemat untuk 1 makanan",
        isPopular: false,
    },
    {
        id: 2,
        coupons: 2,
        price: 15000,
        discount: 65,
        title: "2 Kupon",
        subtitle: "Paket paling populer untuk berbagai pilihan",
        isPopular: true,
    },
    {
        id: 5,
        coupons: 5,
        price: 35000,
        discount: 70,
        title: "5 Kupon",
        subtitle: "Paket terbaik untuk penghematan maksimal",
        isPopular: false,
    },
];

// Komponen Card Pilihan Kupon
const CouponOptionCard = ({ pkg, isSelected, onClick }) => (
    <div
        className={`relative p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 mb-4 
            ${isSelected ? "border-[#2E8B57] bg-[#f0fff4]" : "border-gray-200 hover:border-[#A9F0C5]"}
        `}
        onClick={() => onClick(pkg.id)}
    >
        {/* Label Paling Populer */}
        {pkg.isPopular && (
            <div className="absolute -top-3 left-4 bg-[#2E8B57] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
                <Icon icon="mdi:star" width="16" height="16" className="mr-1" />
                Paling Populer
            </div>
        )}

        <div className="flex justify-between items-start mt-2">
            <div>
                <div className="flex items-center text-gray-800 font-semibold mb-1">
                    <Icon icon="mdi:ticket" width="24" height="24" className="text-[#2E8B57] mr-3" />
                    <div>
                        <h3 className="text-lg">{pkg.coupons} Kupon</h3>
                        <p className="text-sm font-normal text-[#2E8B57]">
                            Hemat hingga {pkg.discount}%
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500 ml-9">{pkg.subtitle}</p>
            </div>
            <div className="text-right">
                <span className="text-2xl font-bold text-gray-800">
                    Rp {pkg.price.toLocaleString('id-ID')}
                </span>
            </div>
        </div>

        {/* Detail Manfaat */}
        <div className="text-sm text-gray-600 space-y-1 mt-3 ml-9">
            <p className="flex items-center">
                <Icon icon="material-symbols:check-rounded" width="24" height="24" style={{color: '#2E8B57'}} />
                Berlaku 30 hari
            </p>
            <p className="flex items-center">
                <Icon icon="material-symbols:check-rounded" width="24" height="24" style={{color: '#2E8B57'}}/>
                ID kupon dikirim ke email
            </p>
            <p className="flex items-center">
                <Icon icon="material-symbols:check-rounded" width="24" height="24" style={{color: '#2E8B57'}}/>
                Bisa digunakan untuk semua makanan
            </p>
        </div>
    </div>
);

// Komponen Utama Halaman
export default function BuyCouponPage() {
    const router = useRouter();
    const [selectedPackageId, setSelectedPackageId] = useState(2); // Default ke 2 Kupon (Populer)
    const selectedPackage = COUPON_PACKAGES.find(p => p.id === selectedPackageId) || COUPON_PACKAGES[0];

    const normalPriceSimulated = 25000; // Harga normal simulasi (untuk perbandingan)
    const savings = normalPriceSimulated - selectedPackage.price;
    const savingsPercentage = ((savings / normalPriceSimulated) * 100).toFixed(0);

    const handleContinue = () => {
        // Implementasi navigasi ke halaman pembayaran checkout kupon
        console.log(`Lanjut pembayaran untuk paket ${selectedPackage.coupons} Kupon.`);
        router.push('/couponEmail');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header Navigasi */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10">
                <div className="max-w-4xl ml-10 px-4 py-4 flex items-center">
                  <button 
                    onClick={() => window.history.back()}
                    className="text-gray-700 hover:text-gray-900 mr-4 flex gap-4 cursor-pointer"
                  >
                    <Icon icon="mdi:arrow-left" width="24" height="24" />
                    <h1 className="text-lg font-medium">Beli Kupon Makmur</h1>
                  </button>
                </div>
            </header>

            {/* Konten Utama */}
            <main className="grow p-4 md:p-8 max-w-2xl mx-auto w-full">
                <p className="text-gray-500 mb-6">Pilih paket kupon untuk mulai hemat</p>

                {/* Box Cara Kerja */}
                <div className="bg-linear-to-r from-secondary to-white border border-secondary p-4 rounded-lg mb-6">
                    <div className="flex items-center text-[#2E8B57] font-semibold mb-2">
                        <Icon icon="mdi:information-outline" width="24" height="24" className="mr-2"/>
                        Cara Kerja Kupon
                    </div>
                    <ul className="text-sm text-gray-700 space-y-1 list-disc pl-5">
                        <li>Beli kupon sesuai kebutuhan Anda</li>
                        <li>ID kupon akan dikirim ke email</li>
                        <li>Gunakan kupon untuk beli makanan hemat</li>
                        <li>Setiap makanan butuh 1 kupon</li>
                    </ul>
                </div>

                {/* Bagian Pilih Paket Kupon */}
                <section className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-3">Pilih Paket Kupon</h2>
                    {COUPON_PACKAGES.map(pkg => (
                        <CouponOptionCard
                            key={pkg.id}
                            pkg={pkg}
                            isSelected={pkg.id === selectedPackageId}
                            onClick={setSelectedPackageId}
                        />
                    ))}
                </section>
            </main>

            {/* Footer / Tombol Bayar */}
            <footer className="w-full bg-white border-t border-gray-200 p-4 sticky bottom-0 shadow-2xl">
                <div className="max-w-2xl mx-auto flex flex-col">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                        <span>Total Pembayaran</span>
                        <span className="text-lg font-bold text-[#2E8B57]">Rp {selectedPackage.price.toLocaleString('id-ID')}</span>
                    </div>
                    <button
                        onClick={handleContinue}
                        className="w-full py-3 bg-[#2E8B57] text-white font-bold text-lg rounded-xl shadow-md transition transform hover:bg-emerald-700 active:scale-[0.99]"
                    >
                        Lanjut Pembayaran
                    </button>
                </div>
            </footer>
        </div>
    );
}