"use client";

export default function OnboardingSlide({ slide }) {
  return (
    <div className="flex flex-col items-center p-8 text-center">
      {slide.showIcon && (
        <div className="mb-6">
          <div className="bg-white p-4 rounded-full">
            <div className="w-20 h-20 flex items-center justify-center">
              <div className="text-8xl">{slide.icon}</div>
            </div>
          </div>
        </div>
      )}

      <h2 className="text-xl font-semibold mb-3 text-gray-800">{slide.title}</h2>
      <p className="text-md text-gray-600 px-4">{slide.description}</p>
    </div>
  );
}
