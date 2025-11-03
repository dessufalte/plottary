"use client";

export const dynamic = "force-dynamic";

import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <AuthCard>
      <Suspense fallback={<div className="text-center text-gray-600">Memuat halaman signup...</div>}>
        <AuthForm mode="signup" defaultRole="vendor" />
      </Suspense>
    </AuthCard>
  );
}
