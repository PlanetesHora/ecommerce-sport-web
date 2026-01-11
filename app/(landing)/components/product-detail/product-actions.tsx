"use client";

import {
    FiArrowRight,
    FiChevronDown,
    FiChevronUp,
    FiShoppingBag,
} from "react-icons/fi";
import Button from "../ui/button";
import {useState} from "react";
import {useRouter} from "next/navigation";

const ProductActions = ({ onAddToCart }: { onAddToCart: () => void }) => {
    const {push}= useRouter();
    const [qty, setQty] = useState(1);

    const checkout = () => {};

    return (
  <div className="flex flex-col xl:flex-row gap-4 w-full">
    {/* Container Quantity & Buttons */}
    <div className="flex gap-4 w-full">
      
      {/* 1. Quantity Counter */}
      <div className="border border-gray-300 inline-flex min-w-[100px] h-[52px] rounded-lg overflow-hidden">
        <div className="flex-1 text-xl font-semibold flex justify-center items-center bg-white">
          <span>{qty}</span>
        </div>
        <div className="flex flex-col border-l border-gray-300 w-10">
          <button
            className="border-b border-gray-300 cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-50"
            onClick={() => setQty(qty + 1)}
          >
            <FiChevronUp size={16} />
          </button>
          <button
            className="cursor-pointer h-1/2 flex items-center justify-center hover:bg-gray-50"
            onClick={() => setQty(qty > 1 ? qty - 1 : qty)}
          >
            <FiChevronDown size={16} />
          </button>
        </div>
      </div>

      {/* 2. Add to Cart Button */}
      <Button className="flex-1 h-[52px] px-6 gap-2 whitespace-nowrap text-sm font-bold" onClick={onAddToCart}>
        <FiShoppingBag size={20} />
        Add to Cart
      </Button>

      {/* 3. Checkout Button */}
      <Button
        variant="dark"
        className="flex-1 h-[52px] px-6 gap-2 whitespace-nowrap text-sm font-bold"
        onClick={() => push("/checkout")}
      >
        Checkout Now
        <FiArrowRight size={20} />
      </Button>
      
    </div>
  </div>
    );
};

export default ProductActions;