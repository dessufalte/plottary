"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

// --- DATA UNTUK 3 SLIDE ONBOARDING ---
const onboardingSlides = [
  {
    icon: "🍽️",
    title: "Selamatkan Makanan",
    description:
      "Beli makanan berkualitas dengan harga hemat sebelum terbuang.",
    showIcon: true,
  },
  {
    icon: "💰",
    title: "Hemat Pengeluaran",
    description: "Dapatkan diskon hingga 70% untuk makanan layak konsumsi.",
    showIcon: true,
  },
  {
    icon: "🌍",
    title: "Bantu Bumi",
    description: "Kurangi food waste dan jejak karbon bersama-sama.",
    showIcon: true,
  },
];

// --- KOMPONEN SLIDE ONBOARDING ---  
const OnboardingSlide = ({ slide }) => (
  <div className="flex flex-col items-center p-8 text-center">
    {slide.showIcon && (
      <div className="mb-6">
        <div className="bg-white p-4 rounded-full">
          <div className="w-20 h-20 flex items-center justify-center ">
            <div className="text-8xl">{slide.icon}</div>
          </div>  
        </div>
      </div>
    )}

    <h2 className="text-xl font-semibold mb-3 text-gray-800">{slide.title}</h2>
    <p className="text-md text-gray-600 px-4">{slide.description}</p>
  </div>
);

// Halaman Onboarding Utama
export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = onboardingSlides.length;
  const currentSlide = onboardingSlides[currentStep];
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Logic untuk navigasi ke halaman utama setelah slide terakhir
      router.push('/home');
      console.log("Navigasi ke Halaman Utama (/home)");
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    // Logic untuk melewati Onboarding
    router.push('/home');
    console.log("Onboarding Dilewati! Navigasi ke Halaman Utama (/home)");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-12 bg-gradient-to-b from-[#2E8B57] to-[#A9F0C5] text-white">
      {/* Logo dan nama aplikasi */}
      <header className="flex flex-col items-center mt-8">
        <div className="text-6xl">🌱</div>
        <h1 className="text-2xl font-semibold mt-2">Makmur</h1>
      </header>

      {/* Onboarding Card */}
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden pt-12 pb-6 px-4">
          <OnboardingSlide slide={currentSlide} />
        </div>
      </div>

      {/* Indikator langkah */}
        <div className="flex justify-center mt-6 mb-4 space-x-2">
          {[...Array(totalSteps)].map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                 index === currentStep ? "bg-white" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

      {/* Tombol Lanjut dan Kembali */}
      <footer className="w-full max-w-lg flex flex-col items-center mb-8">
        <div className="flex w-full space-x-4">
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="w-1/2 py-3 bg-white/30 text-white font-bold text-lg rounded-2xl shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <span className="mr-4 inline-block transition-transform group-hover:translate-x-1">
                &lsaquo;
              </span>
              Kembali
            </button>
          )}
          <button
            onClick={handleNext}
            className={`w-1/2 py-3 bg-white text-[#2E8B57] font-bold text-lg rounded-2xl shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/50
            ${
              currentStep === 0 ? 'w-full' : 'w-1/2'
            }`}
            >
            Lanjut
            <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">
              &rsaquo;
            </span>
          </button>
        </div>

        {/* Tombol lewati */}
          <button
            onClick={handleSkip}
            className="mt-6 text-lg text-white/90 hover:text-white transition-colors"
          >
            Lewati
          </button>
      </footer>
    </div>
  );
}
