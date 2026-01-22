"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import TransactionTable from "../../components/transactions/transaction-table";
import TransactionModal from "../../components/transactions/transaction-modal";
import { useState } from "react";

const TransactionManagement = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleViewDetails = () => {
    setIsOpen(true);
  };

  return (
    <div className="p-4 md:p-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="font-bold text-2xl text-gray-800">Transaction Management</h1>
          <p className="opacity-50 text-sm md:text-base">
            Verify incoming payments and manage orders.
          </p>
        </div>
      </div>

      {/* Tabel Transaksi */}
      <TransactionTable onViewDetails={handleViewDetails} />

      {/* Modal Detail Transaksi*/}
      <TransactionModal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default TransactionManagement;