"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';
import OnboardingSlide from "./components/slide";

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
      router.push('/landingPage');
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
    router.push('/landingPage');
    console.log("Onboarding Dilewati! Navigasi ke Halaman Landing Page");
  };

  const handleStart = () => {
    console.log("Onboarding selesai, menuju halaman home...");
    router.push("/auth/login"); // jika ingin langsung ke halaman utama
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-12 bg-linear-to-b from-[#2E8B57] to-[#A9F0C5] text-white">
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
          {/* Tombol Kembali */}
          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="w-1/2 py-3 bg-white/30 text-white font-bold text-lg rounded-2xl shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/50"
            >
              <span className="mr-4 inline-block transition-transform group-hover:-translate-x-1">
                &lsaquo;
              </span>
              Kembali
            </button>
          )}

          {/* Tombol Lanjut / Mulai */}
          <button
            onClick={currentStep === totalSteps - 1 ? handleStart : handleNext}
            className={`${
              currentStep === 0 ? "w-full" : "w-1/2"
            } py-3 bg-white text-[#2E8B57] font-bold text-lg rounded-2xl shadow-lg transition transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-white/50`}
          >
            {currentStep === totalSteps - 1 ? (
              <>
                Mulai
              </>
            ) : (
              <>
                Lanjut
                <span className="ml-4 inline-block transition-transform group-hover:translate-x-1">
                  &rsaquo;
                </span>
              </>
            )}
          </button>
        </div>

        {/* Tombol Lewati */}
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
