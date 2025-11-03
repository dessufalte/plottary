"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-600">Memuat halaman signup...</div>}>
      <AuthCard>
        <AuthForm mode="signup" defaultRole="vendor" />
      </AuthCard>
    </Suspense>
  );
}
