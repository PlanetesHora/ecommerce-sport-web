"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import CartPopup from "../ui/cart-popup";
import { useCartStore } from "@/app/hooks/use-cart-store"; 

const Header = () => {
  const pathname = usePathname();
  const { items, isOpen, setIsOpen } = useCartStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsOpen(false);
  }, [pathname, setIsOpen]);



  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 w-full z-20 bg-white/50 backdrop-blur-xl border-b border-gray-50">
      <div className="pagar-konten flex items-center justify-between py-4 md:py-6">
        <Link href="/">
          <Image src="/images/logo.svg" alt="sporton logo" width={127} height={30} className="w-[100px] md:w-[127px] h-auto" />
        </Link>

        {/* NAVIGASI */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-20 font-medium text-sm lg:text-base">
          <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Category</Link>
          <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Explore Products</Link>
        </nav>

        {/* ICON AREA */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="relative flex gap-10"> 
            <FiSearch size={22} className="cursor-pointer" />
            
            <button
              className="relative p-1 cursor-pointer flex items-center justify-center outline-none"
              onClick={() => setIsOpen(!isOpen)} 
            >
              <FiShoppingBag size={22} />
              {totalItems > 0 && (
                <div className="bg-primary rounded-full w-4 h-4 absolute -top-1 -right-1 text-[10px] text-white flex items-center justify-center font-bold pointer-events-none">
                  {totalItems}
                </div>
              )}
            </button>

            {/* 4. Gunakan isOpen dari Store */}
            {isOpen && (
              <>
                <div 
                  className="fixed inset-0 z-[-1] cursor-default" 
                  onClick={() => setIsOpen(false)} 
                />
                
                <CartPopup onClose={() => setIsOpen(false)} />
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;