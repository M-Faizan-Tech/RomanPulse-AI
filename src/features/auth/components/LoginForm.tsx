import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import FormMessage from "@/components/ui/FormMessage";
import { Button } from "@/components/ui/button";

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
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <h2 className="text-3xl font-bold text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-zinc-400">
          Sign in to access your AI dashboard.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-10 space-y-7"
        >
          {/* Email */}
          <div>
            <Input
              type="email"
              placeholder="Email"
              {...register("email")}
            />

            <FormMessage message={errors.email?.message} />
          </div>

          {/* Password */}
          <div>
            <PasswordInput
              placeholder="Password"
              {...register("password")}
            />

            <FormMessage message={errors.password?.message} />
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              transition-all
              duration-300
              hover:scale-[1.02]
              active:scale-[0.98]
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing In...
              </>
            ) : (
              "Sign In"
            )}
          </Button>

          {/* Forgot Password */}
          <Button
            type="button"
            variant="ghost"
            className="
              w-full
              text-sm
              text-zinc-400
              transition
              hover:text-white
            "
          >
            Forgot Password?
          </Button>
        </form>
      </motion.div>
    </section>
  );
}