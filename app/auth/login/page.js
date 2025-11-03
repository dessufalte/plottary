"use client";

import { Suspense } from "react";
import dynamicImport from "next/dynamic";

export const dynamic = "force-dynamic";

const AuthCard = dynamicImport(() => import("../components/AuthCard"), { ssr: false });
const AuthForm = dynamicImport(() => import("../components/AuthForm"), { ssr: false });

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-600">Memuat halaman login...</div>}>
      <AuthCard>
        <AuthForm mode="login" />
      </AuthCard>
    </Suspense>
  );
}
