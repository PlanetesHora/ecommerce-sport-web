"use client";

import Button from "@/app/(landing)/components/ui/button";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import BankInfoList from "../../components/bank-info/bank-info-list";
import BankInfoModal from "../../components/bank-info/bank-info-modal";
import { Bank } from "@/app/types";
import { deleteBank, getAllBanks } from "@/app/services/bank.service";
import { toast } from "react-toastify";
import DeleteModal from "../../components/ui/delete-modal";

const BankInfoManagement = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [banks, setBanks] = useState<Bank[]>([]);
  const [selectedBank, setSelectedBank] = useState<Bank | null>(null);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bankToDeleteId, setBankToDeleteId] = useState("");

  const fetchBanks = async () => {
    try {
      const data = await getAllBanks();
      setBanks(data);
    } catch (error) {
      console.error("Failed to fetch bank data", error);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBank(null);
  };

  const handlEdit = (bank: Bank) => {
    setSelectedBank(bank);
    setIsModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setBankToDeleteId(id);
    setIsDeleteModalOpen(true);
  };

  const handlDeleteConfirm = async () => {
    if (!bankToDeleteId) return;

    try {
      await deleteBank(bankToDeleteId);
      toast.success("Bank info deleted succesfully");
      setBankToDeleteId("");
      setIsDeleteModalOpen(false);
      fetchBanks();
    } catch (error) {
      console.error("Failed to delete bank info");
      toast.error("Failed to delete bank info ");
    }
  };

  useEffect(() => {
    fetchBanks();
  }, []);

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
          onClick={() => setIsModalOpen(true)}>
          <FiPlus size={24} />
          Add Bank Account
        </Button>
      </div>

      {/* List Kartu Bank */}
       <BankInfoList banks={banks} onEdit={handlEdit} onDelete={handleDelete} />
        <BankInfoModal
            isOpen={isModalOpen}
            onSuccess={fetchBanks}
            onClose={handleCloseModal}
            bank={selectedBank}
        />
      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handlDeleteConfirm}
      />
    </div>
  );
};

export default BankInfoManagement;