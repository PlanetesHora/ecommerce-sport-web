import { Bank } from "@/app/types";
import { FiCreditCard, FiEdit2, FiTrash2 } from "react-icons/fi";

type TBankInfoListProps = {
  banks: Bank[];
  onEdit: (bank: Bank) => void;
  onDelete: (id: string) => void;
};

const BankInfoList = ({ banks, onEdit, onDelete }: TBankInfoListProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {banks.map((data) => (
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm" key={data._id}>
          <div className="flex justify-between p-5 min-w-0">
            <div className="flex gap-3 items-center min-w-0">
              <div className="bg-blue-50 text-blue-600 rounded-lg w-12 h-12 flex justify-center items-center shrink-0">
                <FiCreditCard size={24} />
              </div>
              <div className="min-w-0 relative group"> 
                <div className="font-bold text-gray-800 truncate cursor-help" title={data.bankName}>
                {data.bankName}
                </div>
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs p-2 rounded-md -top-8 left-0 z-50 whitespace-nowrap shadow-xl pointer-events-none">
                    {data.bankName}
                <div className="absolute -bottom-1 left-4 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
                <div className="text-[10px] uppercase tracking-wider opacity-50">Bank Transfer</div>
                </div>
              </div>
            
            {/* Tombol Aksi */}
            <div className="flex gap-2 items-start text-gray-400 shrink-0 ml-2">
                <button className="cursor-pointer hover:text-blue-600 transition-colors" onClick={() => onEdit(data)}>
                <FiEdit2 size={18} />
                </button>
                <button className="cursor-pointer hover:text-red-600 transition-colors" onClick={() => onDelete(data._id)}>
                <FiTrash2 size={18} />
                </button>
            </div>
        </div>

          <div className="px-5 pb-5 font-medium">
            <div className="text-[10px] opacity-50 mb-1 uppercase tracking-tighter">Account Number</div>
            <div className="text-lg tracking-widest text-gray-700">{data.accountNumber}</div>
          </div>

          <div className="border-t border-gray-100 bg-gray-50/50 px-5 py-3 text-[11px]">
            <span className="opacity-50">Holder:</span>
            <span className="ml-1 font-semibold text-gray-600">{data.accountName}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BankInfoList;