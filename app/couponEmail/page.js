"use client";

import { useState } from "react";
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

// Komponen Header Navigasi
const Header = () => (
    <header className="top-0 left-0 w-full border-b shadow-sm border-gray-200">
        <div className="max-w-4xl ml-10 px-4 py-4 flex items-center">
            <button 
                onClick={() => console.log('Kembali')} // Simulasi tombol kembali
                className="text-gray-700 hover:text-gray-900 mr-4 flex gap-4 cursor-pointer"
            >
                <Icon icon="mdi:arrow-left" width="24" height="24" />
                 <h1 className="text-lg font-medium">Konfirmasi Email</h1>
            </button>
        </div>

    </header>
);

// Komponen Pratinjau Email
const EmailPreview = () => {
    // Data dummy untuk simulasi pratinjau email
    const idKupon = "MAKIMUR-XXXXXX";
    const jumlahKupon = 2; 

    return (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg mt-4">
            <div className="flex items-center text-sm font-semibold mb-2">
                <Icon icon="mdi:alert-triangle" width="16" height="16" className="text-yellow-500 mr-2" />
                Contoh email yang akan dikirim:
            </div>
            <div className="text-sm bg-white p-3 border border-dashed border-gray-300 rounded-md">
                <p className="font-bold mb-1">Subject: ID Kupon Makmur Anda</p>
                <p>Terima kasih telah membeli {jumlahKupon} Kupon.</p>
                <p className="mt-2 font-mono text-[#2E8B57] font-semibold">ID Kupon: {idKupon}</p>
            </div>
        </div>
    );
};


export default function CouponEmailInputPage() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleContinue = () => {
        if (!email || !email.includes('@') || !email.includes('.')) {
            console.error("Masukkan alamat email yang valid.");
            // Di aplikasi nyata, tampilkan pesan error di UI
            return;
        }
        console.log(`Lanjut ke pembayaran untuk Kupon. Email: ${email}`);
        router.push(`/checkout-coupon?email=${email}`);
    };



    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-1 p-6 md:p-8 max-w-2xl mx-auto w-full">
                
                {/* Penting Alert Box */}
                <div className="bg-linear-to-r from-secondary to-white border border-green-300 text-black p-4 rounded-lg flex items-start mb-6 gap-2">
                    <Icon icon="material-symbols:mail-outline" width="24" height="24"  style={{color: '#2E8B57'}} />
                    <div>
                        <p className="font-semibold text-base mb-1">Penting!</p>
                        <p className="text-sm">Setelah pembayaran berhasil, ID kupon akan dikirim ke email Anda. Simpan ID kupon dengan baik untuk membeli makanan.</p>
                    </div>
                </div>

                {/* Form Input */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="contoh@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#2E8B57] focus:border-[#2E8B57] transition duration-150 text-gray-900"
                        required
                    />
                    
                    {/* Pratinjau Email */}
                    <EmailPreview />

                </div>

            </main>

            {/* Footer Tombol Bayar */}
            <footer className="flex justify-center sticky bottom-0 bg-white border-t border-gray-200 p-4 shadow-2xl w-full">
                <button
                    onClick={handleContinue}
                    disabled={!email}
                    className="w-200 py-3 bg-[#2E8B57] text-white font-bold text-lg rounded-xl shadow-lg transition duration-200 disabled:bg-gray-400 hover:bg-emerald-700"
                >
                    Lanjut ke Pembayaran
                </button>
            </footer>
        </div>
    );
}