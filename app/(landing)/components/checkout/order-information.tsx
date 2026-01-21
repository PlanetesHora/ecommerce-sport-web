"use client";

import { useState } from "react";
import CardWithHeader from "../ui/card-with-header";
import { CustomerInfo } from "@/app/hooks/use-cart-store";

type TOrderInformation = {
  formData?: CustomerInfo;
  setFormData?: React.Dispatch<React.SetStateAction<CustomerInfo>>;
};

const OrderInformation = ({ formData, setFormData }: TOrderInformation) => {
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData?.((prev) => ({ 
    ...prev, 
      [e.target.name]: e.target.value 
    }));
  };

  if (!formData) return null;

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 flex flex-col gap-6">
        
        {/* Full Name */}
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="customerName" className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 outline-none focus:border-primary"
            placeholder="Type your full name"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
          />
        </div>

        {/* Whatsapp Number */}
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="customerContact" className="text-sm font-semibold text-gray-700">
            Whatsapp Number
          </label>
          <input
            type="text"
            className="border border-gray-300 p-2 outline-none focus:border-primary"
            placeholder="Type your whatsapp number"
            id="customerContact"
            name="customerContact"
            value={formData?.customerContact ?? ""}
            onChange={handleInputChange}
          />
        </div>

        {/* Shipping Address */}
        <div className="input-group flex flex-col gap-2">
          <label htmlFor="customerAddress" className="text-sm font-semibold text-gray-700">
            Shipping Address
          </label>
          <textarea
            className="border border-gray-300 p-2 outline-none focus:border-primary"
            id="customerAddress"
            name="customerAddress"
            placeholder="Type your shipping address"
            rows={7}
            value={formData?.customerAddress ?? ""}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;