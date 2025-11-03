"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";

const AuthCard = dynamic(() => import("../components/AuthCard"), { ssr: false });
const AuthForm = dynamic(() => import("../components/AuthForm"), { ssr: false });

export const dynamic = "force-dynamic";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-600">Memuat halaman login...</div>}>
      <AuthCard>
        <AuthForm mode="login" />
      </AuthCard>
    </Suspense>
  );
}
