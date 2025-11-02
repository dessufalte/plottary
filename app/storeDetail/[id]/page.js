"use client";

import React, { useState } from 'react';



const icons = {
  MapPin: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Clock: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Phone: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  Star: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.31L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.05z"/></svg>,
  Package: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  TrendingUp: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 13 18 13 15 20 9 4 2 16"/></svg>,
  AlertTriangle: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
  Ticket: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"/></svg>,
  X: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Check: (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
};

const Icon = ({ name, className, size = 20 }) => {
  const IconComponent = icons[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} width={size} height={size} />;
};

// --- Komponen Pembantu: StatCard ---
const StatCard = ({ iconName, title, value, color }) => {
  const IconComponent = icons[iconName];

  return (
    <div className="flex flex-col p-4 bg-white rounded-xl shadow-lg border border-gray-100 h-full">
      <div className={`flex items-center text-sm font-semibold mb-2 ${color}`}>
        {IconComponent && <IconComponent size={20} className="mr-2" />}
        <span>{title}</span>
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

// --- Komponen Pembantu: ProductCard ---
const ProductCard = ({ product }) => {
  const { name, store, rating, normalPrice, discountedPrice, stock, timeRemaining, imgUrl, discountPercent } = product;
  
  // Fungsi untuk format harga
  const formatRupiah = (price) => `Rp ${price.toLocaleString('id-ID')}`;

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden relative">
      
      {/* Label Diskon & Waktu */}
      <div className="absolute top-0 left-0 p-2 text-white text-xs font-semibold flex flex-col items-start space-y-1">
          {/* Waktu Tersisa */}
          <span className="bg-gray-800/70 py-0.5 px-2 rounded-full">{timeRemaining}</span>
      </div>

      {/* Gambar Produk */}
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-32 object-cover"
        onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/cccccc/333333?text=${name}`; }}
      />
      
      {/* Konten Produk */}
      <div className="p-3">
        <div className="flex items-center text-xs text-gray-500 mb-1">
          <span className="font-semibold text-gray-800 mr-1">{store}</span>
          <Icon name="Star" size={12} className="text-yellow-400 mr-1" />
          <span>{rating}</span>
        </div>

        <h3 className="text-md font-semibold text-gray-800 mb-2 truncate">{name}</h3>
        {/* Bagian Kupon & Status */}
        <div className="flex justify-between items-center mt-3">
          {/* Kupon */}
          <div className="flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-medium px-2 py-1 rounded-lg border border-emerald-100">
            <Icon name="Ticket" size={16} className="mr-1" />
            <span>{product.coupons}</span>
          </div>
        
          {/* Status */}
          <div className="flex items-center text-[#2E8B57] text-xs font-medium bg-emerald-50 px-2 py-1 rounded-lg">
            Layak
          </div>
        </div>
        <div className="flex justify-between items-end mt-2">
          <p className="text-sm text-gray-600">{`Stok: ${stock} tersisa`}</p>
          
        </div>
      </div>
    </div>
  );
};


// --- Data Dummy ---
const storeData = {
  name: "Kafe Hijau",
  initial: "K",
  category: "Restoran",
  rating: 4.6,
  description: "Restoran keluarga dengan masakan tradisional Indonesia yang lezat dan terjangkau. Kami berkomitmen untuk menyajikan makanan berkualitas dengan harga yang ramah di kantong.",
  stats: [
    { id: 1, title: "Popularitas Toko", value: "85%", iconName: "TrendingUp", color: "text-primary" },
    { id: 2, title: "Total Produk", value: "12", iconName: "Package", color: "text-gray-600" },
    { id: 3, title: "Terjual Hari Ini", value: "23", iconName: "Star", color: "text-yellow-400" },
  ],
  info: [
    { id: 1, iconName: "MapPin", label: "Alamat", value: "Jl. Sudirman No. 123, Jakarta Pusat" },
    { id: 2, iconName: "Clock", label: "Jam Operasional", value: "08:00 - 20:00" },
    { id: 3, iconName: "Phone", label: "Kontak", value: "+62 812-3456-7890" },
  ],
  products: [
    {
      id: 1,
      name: "Nasi Goreng Spesial",
      store: "Kafe Hijau",
      rating: 4.5,
      stock: 8,
      timeRemaining: "-6m lagi",
      imgUrl: "/images/nasiGorengSpesial.png",
      coupons: 2,
    },
    {
      id: 2,
      name: "Ayam Geprek Jumbo",
      store: "Warung Berkah",
      rating: 4.4,
      stock: 10,
      timeRemaining: "-45m lagi",
      imgUrl: "https://placehold.co/400x300/FFA07A/FFFFFF?text=Ayam+Geprek",
      coupons: 2,
    },
    {
      id: 3,
      name: "Paket Makan Keluarga",
      store: "Warung Berkah",
      rating: 4.9,
      stock: 3,
      timeRemaining: "-45m lagi",
      imgUrl: "https://placehold.co/400x300/ADD8E6/FFFFFF?text=Paket+Keluarga",
      coupons: 2,
    },
  ],
};

const reportCategories = [
  { id: 'quality', title: 'Kualitas Makanan', description: 'Makanan tidak layak konsumsi, ada belatung, basi, dll' },
  { id: 'service', title: 'Pelayanan Buruk', description: 'Pelayanan tidak ramah, lama, dll' },
  { id: 'hygiene', title: 'Kebersihan', description: 'Tempat atau makanan tidak bersih' },
  { id: 'fraud', title: 'Penipuan', description: 'Tidak sesuai deskripsi, harga tidak tepat, dll' },
  { id: 'other', title: 'Lainnya', description: 'Masalah lain yang perlu dilaporkan' },
];

// --- Komponen Pembantu: Modal Laporan Toko ---
const ReportStoreModal = ({ isOpen, onClose, store }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [description, setDescription] = useState('');
  const [errorMessage, setErrorMessage] = useState(""); // ⬅️ untuk pesan error
  const [successMessage, setSuccessMessage] = useState(""); // ⬅️ opsional
  const [showSuccessModal, setShowSuccessModal] = useState(false); 

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (!selectedCategory || !description.trim()) {
      setErrorMessage("Mohon lengkapi kategori dan deskripsi laporan.");
      return;
    }
    setErrorMessage("");
    console.log("Laporan dikirim:", { store: store.name, selectedCategory, description });
    setShowSuccessModal(true);
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    onClose?.(); // tutup form utama kalau diperlukan
  };

  const ReportCategoryCard = ({ category }) => {
    const isSelected = selectedCategory === category.id;
    return (
      <div 
        className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 
          ${isSelected ? 'border-red-500 bg-red-50 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`
        }
        onClick={() => setSelectedCategory(category.id)}
      >
        <h3 className="font-semibold text-gray-800">{category.title}</h3>
        <p className="text-sm text-gray-500 mt-1">{category.description}</p>
      </div>
    );
  };

  return (
    <>
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header Modal */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 sticky top-0 bg-white">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
            <Icon name="AlertTriangle" size={24} className="text-red-500 mr-2" />
            Laporkan Toko
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 cursor-pointer">
            <Icon name="X" size={16} className="mr-1" />
          </button>
        </div>

        {/* Konten Modal (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">

          <p className="text-sm text-gray-600">Laporkan masalah atau pelanggaran yang Anda temukan pada toko ini</p>
          
          {/* Info Toko yang Dilaporkan */}
          <div className="flex items-center p-3 bg-gray-100 rounded-xl border border-gray-200">
            <div className="w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold mr-3 shrink-0">
              W
            </div>
            <div>
              <p className="font-semibold text-gray-800">{store.name}</p>
              <span className="text-xs text-gray-500">{store.category}</span>
            </div>
          </div>

          {/* Pemilihan Kategori Laporan */}
          <h3 className="text-md font-semibold text-gray-800 pt-2">Kategori Laporan <span className="text-red-500">*</span></h3>
          <div className="space-y-3">
            {reportCategories.map(category => (
              <ReportCategoryCard key={category.id} category={category} />
            ))}
          </div>
          
          {/* Deskripsi Masalah */}
          <h3 className="text-md font-semibold text-gray-800 pt-2">Deskripsi Masalah <span className="text-red-500">*</span></h3>
          <p className="text-sm text-gray-500 mb-2">Jelaskan masalah yang Anda alami secara detail...</p>
          <textarea
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500 text-gray-800 min-h-[100px]"
            placeholder="Berikan detail sebanyak mungkin untuk membantu kami meninjau laporan Anda"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          {/* Pesan error */}
          {errorMessage && (
            <div className="bg-red-100 text-red-700 border border-red-400 rounded-md p-2 text-sm">
              {errorMessage}
            </div>
          )}

          {/* Pesan sukses */}
          {successMessage && (
            <div className="bg-green-100 text-green-700 border border-green-400 rounded-md p-2 text-sm">
              {successMessage}
            </div>
          )}
          
          {/* Peringatan Penting */}
          <div className="p-4 bg-yellow-100 text-yellow-800 rounded-lg border border-yellow-300 flex items-start mt-2">
            <Icon name="AlertTriangle" size={20} className="mt-0.5 mr-3 shrink-0" />
            <div>
              <p className="font-bold">Penting!</p>
              <p className="text-sm">Laporan palsu dapat dikenakan sanksi. Pastikan informasi yang Anda berikan akurat dan berdasarkan pengalaman nyata.</p>
            </div>
          </div>
        </div>

        {/* Footer Tombol Aksi */}
        <div className="p-4 border-t border-gray-100 flex justify-center space-x-3 sticky bottom-0 bg-white shadow-inner">
          <button 
            onClick={onClose}
            className="w-full py-2 px-4 text-sm font-semibold text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
          >
            Batal
          </button>
          <button 
            onClick={handleSubmit}
            className="w-full text-center py-2 px-4 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition shadow-md flex justify-center items-center"
          >
            Kirim Laporan
          </button>
        </div>
      </div>
    </div>

    {/* Modal konfirmasi sukses */}
    {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-[90%] max-w-sm text-center animate-fade-in">
            <div className="flex justify-center mb-3">
              <div className="bg-primary p-2 rounded-full">
                <Icon name="Check" className="w-16 h-16 text-white" />
              </div>
            </div>
            <h2 className="text-lg font-bold text-gray-800 mb-2 mt-4">Laporan Berhasil Dikirim!</h2>
            <p className="text-sm text-gray-600 mb-4">
              Laporan Anda tentang <b>{selectedCategory}</b> di <b>{store.name}</b> telah diterima.
            </p>

            <div className="bg-gray-100 rounded-lg p-3 text-sm text-gray-700 mb-4 border border-gray-200">
              <div className="flex items-start gap-2 text-left">
                <Icon icon="mdi:alert-outline" width="20" height="20" className="text-yellow-500 mt-0.5" />
                <p>
                  Tim kami akan meninjau laporan Anda dalam <b>1-2 hari kerja</b>.<br />
                  Anda akan menerima notifikasi mengenai status laporan melalui email dan aplikasi.
                </p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">
              Terima kasih telah membantu menjaga kualitas layanan di Makmur! 🙏
            </p>

            <button
              onClick={handleCloseModal}
              className="w-full py-2.5 bg-[#2E8B57] text-white font-semibold rounded-lg hover:bg-emerald-700 transition"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
};

// --- Komponen Utama: StoreDetail ---
const StoreDetailPage = () => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 antialiased font-sans">
      
      {/* Header Navigasi */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-10 border-b border-gray-200">
        <div className="mx-4 px-4 py-4 flex items-center justify-between">
          <div className="max-w-4xl mx-10 flex items-center">
            <button 
              onClick={() => window.history.back()} 
              className="text-gray-600 hover:text-gray-800 mr-4 flex items-center gap-2 cursor-pointer"
              aria-label="Kembali"
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 9"><path fill="currentColor" d="M12.5 5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5s-.22.5-.5.5"/><path fill="currentColor" d="M6 8.5a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71L5.65.65c.2-.2.51-.2.71 0s.2.51 0 .71L3.21 4.51l3.15 3.15c.2.2.2.51 0 .71c-.1.1-.23.15-.35.15Z"/></svg>
            <h1 className="text-lg font-medium text-gray-600 hover:text-gray-800">Detail Toko</h1>
            </button>
            
          </div>
          <button 
          onClick={() => setIsReportModalOpen(true)}
          className="flex items-center text-sm font-medium text-red-600 border border-red-600 py-1.5 px-3 mr-10 rounded-xl hover:bg-red-50 transition-colors cursor-pointer">
            <Icon name="AlertTriangle" size={16} className="mr-1" />
            Laporkan Toko
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto pt-20 pb-12 px-4">
        
        {/* Bagian 1: Profil Toko */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
          <div className="flex items-start mb-4">
            {/* Avatar Toko */}
            <div className="w-16 h-16 rounded-full bg-linear-to-b from-primary to-secondary text-white flex items-center justify-center text-3xl font-bold mr-4 shrink-0">
              {storeData.initial}
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-800">{storeData.name}</h2>
              <span className="text-sm text-white bg-primary py-0.5 px-2 rounded-full font-medium mt-1 inline-block">{storeData.category}</span>
              
              {/* Rating & Jarak */}
              <div className="flex items-center text-sm text-gray-600 mt-2">
                <Icon name="Star" size={16} className="text-yellow-400 mr-1" />
                <span>{storeData.rating}</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mt-4 leading-relaxed">{storeData.description}</p>
        </section>
        
        {/* Bagian 2: Kartu Statistik */}
        <section className="grid grid-cols-3 gap-4 mb-8">
          {storeData.stats.map(stat => (
            <StatCard 
              key={stat.id}
              title={stat.title}
              value={stat.value}
              iconName={stat.iconName}
              color={stat.color}
            />
          ))}
        </section>

        {/* Bagian 3: Informasi Toko */}
        <section className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 mb-8">
          <h2 className="text-xl font-medium text-gray-800 mb-4">Informasi Toko</h2>
          <div className="space-y-4">
            {storeData.info.map(item => {
              const IconComponent = icons[item.iconName];
              return (
                <div key={item.id} className="flex items-start">
                  <Icon name={item.iconName} size={20} className="text-emerald-600 mr-3 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-medium text-gray-800">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Bagian 4: Produk Diskon */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">{`Produk dari ${storeData.name}`}</h2>
            <span className="text-sm text-gray-500">{`${storeData.products.length} produk`}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storeData.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

      </main>
      {/* Modal Laporan */}
      <ReportStoreModal 
        isOpen={isReportModalOpen} 
        onClose={() => setIsReportModalOpen(false)} 
        store={storeData}
      />
    </div>
  );
};

export default StoreDetailPage;
