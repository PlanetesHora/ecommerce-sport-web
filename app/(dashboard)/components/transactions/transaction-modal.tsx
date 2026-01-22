import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";
import Image from "next/image";
import priceFormatter from "@/app/utils/price-formatter";
import { FiCheck, FiX } from "react-icons/fi";

type TTransactionModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const TransactionModal = ({ isOpen, onClose }: TTransactionModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Transactions">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Kolom Bukti Pembayaran */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-sm mb-2">Payment Proof</h4>
          <div className="relative border border-gray-200 rounded-lg overflow-hidden">
            <Image
              src="/images/payment-proof-dummy.png"
              alt="payment proof"
              width={200}
              height={401}
              className="object-contain"
            />
          </div>
        </div>

        {/* Kolom Detail Order */}
        <div className="flex-1">
          <h4 className="font-semibold text-sm mb-2">Order Details</h4>
          <div className="bg-gray-100 rounded-md flex flex-col gap-2.5 p-4 text-sm mb-5">
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Date</div>
              <div className="text-right">23/02/2026 19:32</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Customer</div>
              <div className="text-right">John Doe</div>
            </div>
            <div className="flex justify-between font-medium">
              <div className="opacity-50">Contact</div>
              <div className="text-right">+123123123</div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-10 font-medium">
              <div className="opacity-50 whitespace-nowrap">Shipping Address</div>
              <div className="text-left sm:text-right">
                Merdeka Street, Jakarta, Indonesia, 332122
              </div>
            </div>
          </div>

          <h4 className="font-semibold text-sm mb-2">Items Purchased</h4>
          <div className="border border-gray-200 rounded-lg p-2 flex items-center gap-2 mb-2">
            <div className="bg-gray-100 rounded aspect-square w-10 h-10 flex items-center justify-center">
              <Image
                src="/images/products/hyperfast-shoes1.png"
                width={30}
                height={30}
                alt="product image"
              />
            </div>
            <div className="font-medium text-xs sm:text-sm flex-1">
              SportsOn Hyperfast Shoes
            </div>
            <div className="font-medium text-sm">3 units</div>
          </div>

          <div className="flex justify-between text-sm mt-6 border-t pt-4">
            <h4 className="font-semibold text-base">Total</h4>
            <div className="text-primary font-bold text-base">
              {priceFormatter(450000)}
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="grid grid-cols-2 sm:flex sm:justify-end gap-3 sm:gap-5 mt-10">
            <Button
              className="text-primary! bg-primary-light! rounded-md w-full sm:w-fit"
              size="small"
            >
              <FiX size={18} />
              Reject
            </Button>
            <Button
              className="text-white! bg-[#50C252]! rounded-md w-full sm:w-fit"
              size="small"
            >
              <FiCheck size={18} />
              Approve
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TransactionModal;