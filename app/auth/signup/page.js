"use client";

import { Suspense } from "react";
import dynamicImport from "next/dynamic";

const AuthCard = dynamicImport(() => import("../components/AuthCard"), {
  ssr: false,
});
const AuthForm = dynamicImport(() => import("../components/AuthForm"), {
  ssr: false,
});

export default function SignupPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center text-gray-600">
          Memuat halaman signup...
        </div>
      }
    >
      <AuthCard>
        {/* Catatan: AuthForm akan menerima props mode="signup" dan defaultRole="vendor" */}
        <AuthForm mode="signup" defaultRole="vendor" />
      </AuthCard>
    </Suspense>
  );
}
