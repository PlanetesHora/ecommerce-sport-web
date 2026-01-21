"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";
import priceFormatter from "@/app/utils/price-formatter";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";
import { useCartStore } from "@/app/hooks/use-cart-store";

type TProductsProps = {
  products: Product[];
};

const ProductsSection = ({ products }: TProductsProps) => {
  const { addItem, setIsOpen } = useCartStore();

   const handleAddtoCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
    setIsOpen(true);
  };

  return (
    <section id="products-section" className="pagar-konten mt-20 lg:mt-32 mb-32">
      <h2 className="font-bold italic text-3xl md:text-4xl text-center mb-12 uppercase tracking-tight">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
        {products.map((product) => (
          <Link
            href={`/product/${product._id}`} // HUBUNGKAN KE DETAIL PAGE
            key={product._id}
            className="group block p-3 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:drop-shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
          >
            <div className="bg-primary-light rounded-xl aspect-square w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={getImageUrl(product.imageUrl)}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />
              <Button className="w-10 h-10 p-0! absolute right-3 top-3 rounded-full opacity-100 transition-opacity duration-300 shadow-lg" onClick={(e) => handleAddtoCart(e, product)}>
                <FiPlus size={20} />
              </Button>
            </div>

            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between items-center mt-3">
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{product.category.name}</div>
              <div className="font-bold text-lg text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;