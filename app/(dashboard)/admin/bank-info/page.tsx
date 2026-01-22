"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";

const BankInfoManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 md:p-0">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="font-bold text-2xl">Bank Info Management</h1>
          <p className="opacity-50 text-sm md:text-base">
            Manage destination accounts for customer transfers.
          </p>
        </div>
        
        {/* Tombol */}
        <Button 
          className="rounded-lg w-full md:w-fit" 
          onClick={() => setIsOpen(true)}
        >
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>

      {/* List Kartu Bank */}
      <BankInfoList />

      {/* Modal Form */}
      <BankInfoModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default BankInfoManagement;