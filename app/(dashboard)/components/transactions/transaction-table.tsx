import { Transaction } from "@/app/types";
import priceFormatter from "@/app/utils/price-formatter";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

const transactionData = [
  {
    date: "23/02/2026 19:32",
    customer: "John Doe",
    contact: "+123123123 ",
    total: 1500000,
    status: "pending",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 2",
    contact: "+123123123 ",
    total: 2500000,
    status: "rejected",
  },
  {
    date: "23/02/2026 19:32",
    customer: "John Doe 3",
    contact: "+123123123 ",
    total: 1000000,
    status: "paid",
  },
];

type TTransactionTableProps = {
  onViewDetails: (transaction: Transaction) => void;
  transactions: Transaction[];
};

const TransactionTable = ({
  onViewDetails,
  transactions,
}: TTransactionTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "bg-yellow-100 text-yellow-600 border-yellow-300";
      case "rejected":
        return "bg-red-100 text-red-600 border-red-300";
      case "paid":
        return "bg-green-100 text-green-600 border-green-300";
    }
  };

  return (
    <div className="w-full max-w-full bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="w-full overflow-x-auto block">
      <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/50">
            <th className="px-6 py-4 font-semibold w-[20%]">Date</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Customer</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Contact</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Total</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Status</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Actions</th>
          </tr>
        </thead>
        <tbody>
        {transactions.map((data) => (
        <tr
            key={data._id}
            className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors"
        >
        {/*Kolom Date */}
        <td className="px-6 py-4 font-medium whitespace-nowrap">
        {new Date(data.createdAt).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
        </td>

        {/* Kolom Customer */}
        <td className="px-6 py-4 font-medium relative group">
            <span className="truncate max-w-[150px] block cursor-help">{data.customerName}</span>
            <span className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-white text-xs p-2 rounded-md -top-2 left-10 z-50 whitespace-nowrap shadow-xl pointer-events-none">
            {data.customerName}
            <div className="absolute -bottom-1 left-2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </span>
        </td>

        {/* Kolom Contact */}
        <td className="px-6 py-4 font-medium">
            {data.customerContact || "-"}
        </td>

        {/*Kolom Total */}
        <td className="px-6 py-4 font-medium">
            {priceFormatter(parseInt(data.totalPayment))}
        </td>

        {/* Kolom Status */}
        <td className="px-6 py-4 font-medium">
            <div
                className={`px-4 py-1 rounded-full border text-center w-fit text-sm uppercase ${getStatusColor(
                    data.status
                )}`}
            >
                {data.status}
            </div>
        </td>

        {/* 6. Kolom Actions */}
        <td className="px-6 py-4 flex items-center gap-3 text-gray-600">
            <button
                onClick={() => onViewDetails(data)}
                className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 w-fit py-1 px-2 rounded-md"
            >
            <FiEye size={18} />
            View Details
            </button>
        </td>
        </tr>
        ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default TransactionTable;