export default function LoginForm() {
  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mt-3 text-zinc-400">
          Sign in to access your AI dashboard.
        </p>

        <div className="mt-10 space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="glass w-full rounded-xl px-4 py-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="glass w-full rounded-xl px-4 py-3 outline-none"
          />

          <button className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:scale-[1.02]">
            Sign In
          </button>

          <button className="w-full text-sm text-zinc-400 hover:text-white transition">
            Forgot Password?
          </button>
        </div>
      </div>
    </section>
  );
}