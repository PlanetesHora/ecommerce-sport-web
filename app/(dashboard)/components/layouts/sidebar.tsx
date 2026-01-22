"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FiBox,
  FiCreditCard,
  FiLayers,
  FiLogOut,
  FiShoppingCart,
  FiMenu,
  FiX,    
} from "react-icons/fi";

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  const menuItems = [
    { name: "Products", icon: FiBox, link: "/admin/products" },
    { name: "Categories", icon: FiLayers, link: "/admin/categories" },
    { name: "Transactions", icon: FiShoppingCart, link: "/admin/transactions" },
    { name: "Bank Information", icon: FiCreditCard, link: "/admin/bank-info" },
  ];

  return (
    <>
      {/* Hamburger Menu untuk di HP */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-primary text-white rounded-md"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-100 flex flex-col transition-transform duration-300
        w-72 md:w-80
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
      `}>
        {/* Logo Section */}
        <div className="py-8 px-10 md:px-14 border-b border-gray-200">
          <Image
            src="/images/logo-admin.svg"
            alt="logo admin"
            width={215}
            height={36}
            className="w-full h-auto"
          />
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-2 mt-8 md:mt-12 p-5 overflow-y-auto">
          {menuItems.map((item, index) => {
            const isActive = item.link === pathname;
            return (
              <Link
                href={item.link}
                key={index}
                onClick={() => setIsOpen(false)} // Tutup menu setelah klik di mobile
                className={`flex gap-3 items-center py-3 px-4.5 rounded-lg font-medium duration-300 ${
                  isActive ? "bg-primary/15 text-primary" : "hover:bg-gray-100"
                }`}
              >
                <item.icon size={24} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Logout */}
        <Link
          href="#"
          className="flex gap-3 font-medium py-3 px-4.5 mx-5 hover:bg-red-50 hover:text-red-600 duration-300 rounded-lg mt-auto mb-10 text-gray-600"
        >
          <FiLogOut size={24} />
          Log Out
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;