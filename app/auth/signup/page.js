// app/auth/signup/page.js
import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";

export default function SignupPage() {
  return (
    <AuthCard>
      <AuthForm mode="signup" defaultRole="vendor" />
    </AuthCard>
  );
}
