export const dynamic = "force-dynamic";

import { Suspense } from "react";
import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="text-center text-gray-600">Memuat halaman login...</div>}>
      <AuthCard>
        <AuthForm mode="login" />
      </AuthCard>
    </Suspense>
  );
}