"use client";

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

// Komponen Fungsional untuk format harga
const formatRupiah = (amount) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(amount);
};

// Data Dummy
const DUMMY_ORDER = {
    itemName: "Salad Bowl Organik",
    vendorName: "Kafe Hijau",
    itemImage: "/images/saladBowlOrganik.png",
    originalPrice: 45000,
    discountAmount: 25000,
    totalPrice: 20000,
    couponNeeded: 2,
    discountPercentage: 57,
};

// --- Komponen Modal Sukses Pembayaran ---
const PaymentSuccessModal = ({ order, onClose }) => {
    
    const router = useRouter();

    const handleGoHome = () => {
        onClose();
        console.log("Navigasi ke Halaman Utama (Home)");
        router.push('/home');
    };

    return (
        // Overlay Latar Belakang
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300">
            {/* Modal Konten */}
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-transform duration-300">
                
                {/* Header dan Tombol Tutup */}
                <div className="p-5 flex justify-end">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition">
                        <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                    </button>
                </div>

                <div className="px-6 pb-6 text-center">
                    {/* Ikon Sukses */}
                    <div className="flex justify-center mb-4">
                        <Icon icon="mdi:check-circle" width="48" height="48" className="mr-2" style={{color: '#2E8B57'}} />
                    </div>
                    
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Pembelian Berhasil!</h2>
                    <p className="text-sm text-gray-600 mb-6">
                        Kupon Anda telah berhasil digunakan untuk membeli {order.itemName}.
                    </p>

                    {/* Langkah Selanjutnya */}
                    <div className="bg-green-100 p-4 rounded-lg text-left mb-6 border border-green-300">
                        <h3 className="flex items-center font-bold text-[#2E8B57] mb-2">
                            <Icon icon="mdi:check-circle" width="24" height="24" className="mr-2" /> Langkah Selanjutnya
                        </h3>
                        <ol className="text-sm text-gray-700 space-y-2 list-none p-0">
                            <li>
                                1. Kode konfirmasi telah dikirim ke email.
                            </li>
                            <li>
                                2. Kunjungi <span className="font-semibold">{order.vendorLocation}</span> untuk mengambil makanan.
                            </li>
                            <li>
                                3. Tunjukkan kode konfirmasi yang ada di email kepada vendor.
                            </li>
                            <li>
                                4. Nikmati makanan Anda!
                            </li>
                        </ol>
                    </div>

                    {/* Detail Toko */}
                    <div className="bg-gray-100 p-4 rounded-lg text-left mb-6 border border-gray-300">
                        <h3 className="flex items-center font-bold text-gray-800 mb-2 gap-2">
                            <Icon icon="mynaui:location" width="24" height="24"  style={{color: '#2E8B57'}} /> {order.vendorName}
                        </h3>
                        <p className="text-sm text-gray-600 ml-8">Tersedia:</p>
                    </div>

                    {/* Peringatan Waktu */}
                    <div className="bg-yellow-100 p-4 rounded-lg text-left mb-8 border border-yellow-300">
                        <h3 className="flex items-center font-bold text-yellow-800 mb-2 gap-2">
                            <Icon icon="tabler:clock" width="24" height="24"  style={{color:'#D97706'}} /> Penting!
                        </h3>
                        <p className="text-sm text-gray-700">
                            Pastikan untuk mengambil makanan sesuai waktu yang tertera. Kode konfirmasi hanya berlaku untuk satu kali pengambilan.
                        </p>
                    </div>

                    {/* Tombol Aksi */}
                    <button
                        onClick={handleGoHome}
                        className="w-full py-3 bg-[#2E8B57] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-emerald-700 transition duration-200"
                    >
                        Kembali ke Home
                    </button>
                </div>
            </div>
        </div>
    );
};

// --- Komponen Utama ---
export default function CheckoutPage() {
    const [email, setEmail] = useState('contoh@email.com');
    const [couponId, setCouponId] = useState('');
    const [showConfirmation, setShowConfirmation] = useState(false);
    const order = DUMMY_ORDER;
    const finalPrice = order.totalPrice;
    
    // const router = useRouter(); // Uncomment ini untuk navigasi nyata

    const handleVerification = () => {
        // Logika verifikasi kupon di sini
        if (couponId === 'MAKMUR-A1B2C3D4') {
            console.log("Kupon Terverifikasi!");
            // Anda dapat menambahkan logika state di sini (e.g., setCouponVerified(true))
        } else {
            console.log("ID Kupon tidak valid.");
        }
    };

    const handlePayment = () => {
        console.log(`Pembayaran Rp ${finalPrice} berhasil!`);
        setShowConfirmation(true); 
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
                    <h1 className="text-lg font-medium">Checkout Produk</h1>
                  </button>
                </div>
            </header>

            <main className="flex-1 max-w-4xl mx-auto w-full p-4 pb-40 space-y-6">
                
                {/* Ringkasan Pesanan */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Ringkasan Pesanan</h2>
                    
                    {/* Item Produk */}
                    <div className="flex items-center justify-between mb-4 border-b pb-4">
                        <div className="flex items-center gap-3">
                            <img 
                                src={order.itemImage} 
                                alt={order.itemName} 
                                className="w-16 h-16 rounded-lg object-cover"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">{order.itemName}</p>
                                <p className="text-sm text-gray-500">{order.vendorName}</p>
                                <div className="flex items-center mt-1">
                                    <span className="bg-[#2E8B57] text-white text-sm font-medium px-2 py-0.5 rounded-full mr-2">
                                        {order.couponNeeded} Kupon
                                    </span>
                                    <span className="bg-white border border-primary text-primary text-sm font-medium px-2 py-0.5 rounded-full">
                                        Hemat {order.discountPercentage}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Rincian Harga */}
                    <div className="text-sm space-y-1">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Harga Normal</span>
                            <span className="text-gray-600 line-through">{formatRupiah(order.originalPrice)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[#2E8B57] font-semibold">Hemat dengan Kupon</span>
                            <span className="text-[#2E8B57] font-semibold">- {formatRupiah(order.discountAmount)}</span>
                        </div>
                        <div className="flex justify-between pt-2 border-t mt-2">
                            <span className="text-md font-bold text-gray-800">Total</span>
                            <span className="text-md font-bold text-gray-800">{formatRupiah(order.totalPrice)}</span>
                        </div>
                    </div>
                </div>

                {/* Cara Kerja Kupon */}
                <div className="bg-green-100 p-4 rounded-xl shadow-sm border border-green-300">
                    <h3 className="flex items-center font-bold text-[#2E8B57] mb-3">
                        <Icon icon="mdi:check-circle" width="24" height="24" className="mr-2" /> Cara Kerja Kupon
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                        <li>Masukkan email dan ID kupon yang Anda miliki</li>
                        <li>Kupon akan otomatis terpotong dari saldo</li>
                        <li>Voucher QR code akan dikirim ke email</li>
                        <li>Tunjukkan QR code saat pengambilan di toko</li>
                    </ul>
                </div>

                {/* Input Email */}
                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-4">
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="placeholder-gray-400 w-full p-2 border border-gray-300 rounded-lg focus:ring-[#2E8B57] focus:border-[#2E8B57] transition"
                            placeholder="contoh@email.com"
                        />
                        <p className="text-xs text-gray-500">Voucher QR code akan dikirimkan ke email ini</p>
                    </div>

                    {/* Input ID Kupon */}
                    <div className="space-y-1">
                        <label htmlFor="couponId" className="block text-sm font-medium text-gray-700">ID Kupon <span className="text-red-500">*</span></label>
                        <div className="flex gap-2">
                            <input
                                type="text"
                                id="couponId"
                                onChange={(e) => setCouponId(e.target.value)}
                                className="placeholder-gray-400 flex-1 p-2 text-black border border-gray-300 rounded-lg focus:ring-[#2E8B57] focus:border-[#2E8B57] transition uppercase"
                                placeholder="MAKMUR-A1B2C3D4"
                            />
                            <button 
                                onClick={handleVerification}
                                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition"
                            >
                                Verifikasi
                            </button>
                        </div>
                        <p className="text-xs text-gray-500">Masukkan ID kupon yang Anda terima melalui email</p>
                        <div className="p-2 mt-1 bg-gray-100 border border-gray-300 rounded-md text-xs text-gray-700">
                            Contoh ID Kupon: <span className="font-mono font-semibold">MAKMUR-A1B2C3D4</span>
                        </div>
                    </div>
                </div>

                {/* Alert Penting */}
                <div className="bg-yellow-100 p-4 rounded-xl shadow-sm border border-yellow-300">
                    <h3 className="flex items-center font-bold text-yellow-800 mb-2">
                        <Icon icon="tabler:alert-triangle" width="20" height="20" className="mr-2" style={{color: '#D97706'}} /> Penting!
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1 ml-4 list-disc">
                        <li>Pastikan Anda memiliki minimal {order.couponNeeded} kupon</li>
                        <li>Porsi yang sudah digunakan tidak dapat dikembalikan</li>
                        <li>Voucher hanya berlaku sesuai waktu yang tertera</li>
                        <li>Simpan QR code voucher untuk ditunjukkan ke vendor</li>
                    </ul>
                </div>

            </main>

            {/* Footer Total dan Tombol Bayar */}
            <footer className="fixed bottom-0 w-full bg-white border-t border-gray-200 p-4 shadow-2xl">
                <div className="mx-auto text-center">
                    <p className="text-md text-black mb-3">
                    Total ({order.couponNeeded} Kupon)
                    </p>

                    <button
                    onClick={handlePayment}
                    className="w-[1000px] py-3 bg-[#2E8B57] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-emerald-700 transition duration-200 mx-auto flex items-center justify-center gap-2 text-center"
                    >
                    <Icon icon="icon-park-outline:tag" width="16" height="16" />
                    Beli dengan Kupon
                    </button>
                </div>
            </footer>
            
            {/* Modal Konfirmasi Pembayaran */}
            {showConfirmation && <PaymentSuccessModal order={{...order, emailSentTo: email}} onClose={() => setShowConfirmation(false)} />}

        </div>
    );
}
