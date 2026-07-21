import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";

import {
  loginSchema,
  type LoginFormData,
} from "../schemas/loginSchema";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    // This will later be replaced with Supabase Auth
    console.log(data);

    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <section className="flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <h1 className="text-4xl font-bold">Welcome Back</h1>

        <p className="mt-3 text-zinc-400">
          Sign in to access your AI dashboard.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-6"
        >
          {/* Email */}
          <div>
            <Input
                type="email"
                placeholder="Email"
                {...register("email")}
            />

            {errors.email && (
              <p className="mt-2 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <PasswordInput
                placeholder="Password"
                {...register("password")}
            />

            {errors.password && (
              <p className="mt-2 text-sm text-red-400">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-white py-3 font-semibold text-black transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Signing In..." : "Sign In"}
          </button>

          {/* Forgot Password */}
          <button
            type="button"
            className="w-full text-sm text-zinc-400 transition hover:text-white"
          >
            Forgot Password?
          </button>
        </form>
      </div>
    </section>
  );
}