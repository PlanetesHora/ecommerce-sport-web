import CardWithHeader from "../ui/card-with-header";

const OrderInformation = () => {
  // Mantra untuk class input agar tidak tulis berulang-ulang
  const inputClass = "w-full bg-gray-100 p-3 rounded-lg outline-none focus:bg-gray-200 transition-all text-sm placeholder:text-gray-400";

  return (
    <CardWithHeader title="Order Information">
      <div className="p-5 flex flex-col gap-6">
        
        {/* Full Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="full_name" className="text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="full_name"
            placeholder="Type your full name"
            className={inputClass}
          />
        </div>

        {/* Whatsapp Number */}
        <div className="flex flex-col gap-2">
          <label htmlFor="wa_number" className="text-sm font-semibold text-gray-700">
            Whatsapp Number
          </label>
          <input
            type="text"
            id="wa_number"
            placeholder="+62xxxx"
            className={inputClass}
          />
        </div>

        {/* Shipping Address */}
        <div className="flex flex-col gap-2">
          <label htmlFor="shipping_address" className="text-sm font-semibold text-gray-700">
            Shipping Address
          </label>
          <textarea
            id="shipping_address"
            placeholder="Example Street, 18, West Jakarta..."
            rows={5}
            className={`${inputClass} resize-none h-32`}
          />
        </div>

      </div>
    </CardWithHeader>
  );
};

export default OrderInformation;