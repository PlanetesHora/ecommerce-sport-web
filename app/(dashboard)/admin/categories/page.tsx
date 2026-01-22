"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import CategoryTable from "../../components/categories/category-table";
import CategoryModal from "../../components/categories/category-modal";
import { useState } from "react";

const CategoryManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 md:p-0">
      {/* Header*/}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="font-bold text-2xl">Category Management</h1>
          <p className="opacity-50 text-sm">Organize your products into categories.</p>
        </div>
        
        {/* Tombol */}
        <Button 
          className="rounded-lg w-full md:w-fit" 
          onClick={() => setIsOpen(true)}
        >
          <FiPlus size={24} />
          Add Category
        </Button>
      </div>

      <CategoryTable />
      <CategoryModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CategoryManagement;