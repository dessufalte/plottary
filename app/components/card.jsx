"use client";

// --- Komponen Kartu Statistik ---
export default function StatCard({ icon, percentage, description }) {
    return (
     <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/70 shadow-lg border border-gray-100">
        <div className="p-4 mb-10 rounded-full bg-primary text-white">{icon}</div>
        <p className="text-2xl mb-10 font-bold text-primary">{percentage}</p>
        <p className="text-sm text-gray-600 text-center mt-1">{description}</p>
    </div>
    );
}


