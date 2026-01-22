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
  onViewDetails: () => void;
};

const TransactionTable = ({ onViewDetails }: TTransactionTableProps) => {
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
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[800px] table-fixed">
        <thead>
          <tr className="border-b border-gray-200 bg-gray-50/50">
            <th className="px-6 py-4 font-semibold w-[15%]">Date</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Customer</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Contact</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Total</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Status</th>
            <th className="px-6 py-4 font-semibold w-[15%]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0 hover:bg-gray-50/50 transition-colors"
            >
              <td className="px-6 py-4 font-medium whitespace-nowrap">{data.date}</td>
              <td className="px-6 py-4 font-medium relative group">
                <div className="truncate max-w-[150px]">{data.customer}</div>
                <div className="absolute invisible group-hover:visible bg-gray-900 text-white text-xs p-2 rounded-md -top-2 left-6 z-50 whitespace-nowrap shadow-xl">
                {data.customer}
                    <div className="absolute -bottom-1 left-2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </div>
              </td>
              <td className="px-6 py-4 font-medium whitespace-nowrap">{data.contact}</td>
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                {priceFormatter(data.total)}
              </td>

              <td className="px-6 py-4 font-medium text-center">
                <div
                  className={`px-3 py-1 rounded-full border text-center w-fit text-[11px] font-bold uppercase tracking-wider ${getStatusColor(
                    data.status
                  )}`}
                >
                  {data.status}
                </div>
              </td>
              <td className="p-0">
                <button
                  onClick={onViewDetails}
                  className="flex items-center gap-2 cursor-pointer hover:bg-primary/10 hover:text-primary transition-all w-fit py-1.5 px-1 rounded-md border border-transparent hover:border-primary/20 text-sm font-semibold text-gray-600"
                >
                  <FiEye size={18} />
                  <span className="whitespace-nowrap">View Details</span>
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