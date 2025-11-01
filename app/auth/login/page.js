import AuthCard from "../components/AuthCard";
import AuthForm from "../components/AuthForm";

export default function LoginPage() {
  return (
    <AuthCard>
      <AuthForm mode="login" />
    </AuthCard>
  );
}
