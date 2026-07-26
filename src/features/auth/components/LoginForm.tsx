import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Input from "@/components/ui/Input";
import PasswordInput from "@/components/ui/PasswordInput";
import FormMessage from "@/components/ui/FormMessage";
import { Button } from "@/components/ui/button";

import { login } from "../services/authService";

import {
  loginSchema,
  type LoginFormData,
} from "../schemas/loginSchema";

export default function LoginForm() {
  const navigate = useNavigate();

  const [authError, setAuthError] = useState("");

 const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm<LoginFormData>({
  resolver: zodResolver(loginSchema),
});

  const onSubmit = async (data: LoginFormData) => {
    try {
      setAuthError("");

      await login(
        data.email,
        data.password
      );

      reset();

      navigate("/dashboard");

    } catch (error) {
      if (error instanceof Error) {
        setAuthError(error.message);
      } else {
        setAuthError(
          "Something went wrong. Please try again."
        );
      }
    }
  };

  return (
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
            autoComplete="off"
            {...register("email")}
          />

          <FormMessage message={errors.email?.message} />
        </div>


        {/* Password */}
        <div>
          <PasswordInput
            placeholder="Password"
            autoComplete="new-password"
            {...register("password")}
        />

          <FormMessage message={errors.password?.message} />
        </div>


        {/* Authentication Error */}
        <FormMessage message={authError} />


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
  );
}