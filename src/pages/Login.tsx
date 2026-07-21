import {
  BrandingPanel,
  LoginForm,
} from "@/features/auth/components";

export default function Login() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09090B]">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl lg:grid-cols-[1.5fr_1fr]">
        {/* Branding */}
        <div className="hidden lg:block">
          <BrandingPanel />
        </div>

        {/* Login */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md">
            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
}