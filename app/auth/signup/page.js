"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const AuthCard = dynamic(() => import("../components/AuthCard"), {
  ssr: false,
});
const AuthForm = dynamic(() => import("../components/AuthForm"), {
  ssr: false,
});

export const dynamic = "force-dynamic";

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
        <AuthForm mode="signup" defaultRole="vendor" />
      </AuthCard>
    </Suspense>
  );
}
