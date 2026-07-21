import {
  BrandingPanel,
  LoginForm,
} from "@/features/auth/components";

export default function Login() {
  return (
    <main className="min-h-screen bg-[#09090B]">
      <div className="mx-auto grid min-h-screen max-w-7xl lg:grid-cols-2">
        <BrandingPanel />
        <LoginForm />
      </div>
    </main>
  );
}