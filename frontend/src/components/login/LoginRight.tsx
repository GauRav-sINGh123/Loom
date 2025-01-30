"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import { loginSchema } from '@/zod/loginSchema';
import { z } from 'zod';
import { toast } from 'sonner';
import { Eye, EyeOff } from "lucide-react";


type LoginFormInputs = z.infer<typeof loginSchema>;

function LoginRight() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_AUTH_URL}/signin`,
        data,
        { withCredentials: true }
      );
      toast.success("Login successful!");
      router.push("/feed");
    } catch (err:any) {
      toast.error("Login failed!");
    }
  };

  return (
    <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
      <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-md shadow-xl">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Welcome to the party!
          </h1>
          <p className="text-sm text-white">Sign in to join the fun</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-2">
          <div>
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              className="text-white border border-white rounded-xl mt-1"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
          <div className="relative">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              {...register("password")}
              className="text-white border border-white rounded-xl mt-1 pr-10"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3 mt-6 flex items-center text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>
          <Button type="submit" className="w-full bg-white text-black hover:bg-white rounded-md" disabled={isSubmitting}>
            {isSubmitting ? "Signing In..." : "Sign In"}
          </Button>
        </form>
        <p className="mt-8 text-center text-sm text-white">
          Don't have an account?{' '}
          <Link href="/signup" className="font-semibold text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginRight;