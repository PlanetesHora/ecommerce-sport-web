"use client";

import Button from "@/app/(landing)/components/ui/button";
import { login } from "@/app/services/auth.service";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/admin/products");
    }
  }, [router]);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      const data = await login({ email, password });

      if (data.token) {
        router.push("/admin/products");
      }
    } catch (err: any) {
      setErrorMessage(
        err.message || "Something went wrong, please try again later.",
      );
      console.error("Login error", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-[#F7F9FA] w-full min-h-screen flex justify-center items-center p-4">
      <div className="max-w-md md:max-w-[544px] w-full bg-white rounded-xl border-t-4 border-primary py-10 md:py-12 px-6 md:px-[72px] shadow-sm">
        <Image
          src="/images/logo-admin.svg"
          alt="logo admin"
          width={250} 
          height={42}
          className="mx-auto mb-4 w-[200px] md:w-[304px]" 
        />
        
        <p className="opacity-50 text-xs md:text-sm text-center mb-9">
          Enter your credentials to access the dashboard
        </p>

        {errorMessage && (
          <div className="px-3 py-1 bg-primary-light border border-primary rounded-md text-primary text-sm text-center w-full mb-2">
            {errorMessage}
          </div>
        )}

        <div className="input-group-admin mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please type your email"
            className="rounded-lg!"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="input-group-admin mb-10 md:mb-12">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="••••••••••••••••••••"
            className="rounded-lg! w-full pr-12"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>

        <Button
          className="w-full rounded-lg! mb-6 md:mb-8" onClick={handleLogin}>
             {isLoading ? "Signing in ..." : "Sign In"}
        </Button>

        <p className="text-center text-xs text-gray-400">
          © 2026 SportOn Admin Portal
        </p>
      </div>
    </main>
  );
};

export default LoginPage;