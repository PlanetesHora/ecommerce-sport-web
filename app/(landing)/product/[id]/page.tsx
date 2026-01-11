"use client"; 

import { useState } from "react";
import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import CartPopup from "../../components/ui/cart-popup"; 
import priceFormatter from "@/app/utils/price-formatter";

const ProductDetail = () => {
  const [showCart, setShowCart] = useState(false);

  return (
    <main className="pagar-konten py-12 lg:py-20 flex flex-col md:flex-row gap-8 lg:gap-16 items-start mt-8 relative">
      {showCart && (
        <>
          {/* 1. Overlay: Klik di mana saja di luar popup untuk menutup */}
          <div 
            className="fixed inset-0 z-10 bg-black/5" 
            onClick={() => setShowCart(false)} 
          />
          
          {/* 2. Popup Cart: Berikan z-20 agar berada di atas overlay */}
          <div className="z-20 absolute right-0 top-0">
             <CartPopup />
          </div>
        </>
      )}
      {/* -------------------------------------------- */}

      {/* Container Gambar */}
      <div className="bg-primary-light aspect-square md:w-1/2 max-w-[500px] flex justify-center items-center overflow-hidden mx-auto">
        <Image
          src="/images/products/hypersoccer-v22.png"
          width={500}
          height={500}
          alt="product image"
          className="aspect-square object-contain w-4/5 h-4/5"
          priority
        />
      </div>

      {/* Container Detail Teks */}
      <div className="w-full md:w-1/2 flex flex-col justify-center -translate-x-4 translate-y-12">
        <h1 className="font-bold text-3xl lg:text-4xl mb-4 leading-tight">
          SportsOn HyperSoccer v2
        </h1>
        <div className="bg-primary-light rounded-full text-primary py-1.5 px-4 text-sm font-medium w-fit mb-6">
          Football
        </div>
        
        <p className="leading-relaxed text-gray-600 mb-8 text-sm lg:text-base">
          The SportsOn HyperSoccer v2 is engineered for the player who demands
          precision, power, and unrivaled speed on the pitch. Featuring a
          striking, two-toned black and white design with deep crimson accents.
        </p>

        <div className="text-primary text-2xl lg:text-3xl font-bold mb-10">
          {priceFormatter(458000)}
        </div>

        {/* 3. Kirim fungsi untuk menyalakan saklar ke ProductActions */}
        <ProductActions onAddToCart={() => setShowCart(true)} />
      </div>
    </main>
  );
};

export default ProductDetail;