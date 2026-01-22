"use client";

import Button from "@/app/(landing)/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const { push } = useRouter();
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

        <div className="input-group-admin mb-5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Please type your email"
            className="rounded-lg!"
          />
        </div>

        <div className="input-group-admin mb-10 md:mb-12">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••••••••••••••"
            className="rounded-lg!"
          />
        </div>

        <Button
          className="w-full rounded-lg! mb-6 md:mb-8"
          onClick={() => push("/admin/products")}
        >
          Sign In
        </Button>

        <p className="text-center text-xs text-gray-400">
          © 2026 SportOn Admin Portal
        </p>
      </div>
    </main>
  );
};

export default LoginPage;