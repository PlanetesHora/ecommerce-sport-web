import priceFormatter from "@/app/utils/price-formatter";
import Image from "next/image";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const categoryData = [
  {
    name: "Running",
    imageUrl: "/images/categories/category-running.png",
    description: "lorem ipsum ",
  },
  {
    name: "Football",
    imageUrl: "/images/categories/category-football.png",
    description: "lorem ipsum ",
  },
];

const CategoryTable = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-x-auto">
      <table className="w-full text-left border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="px-6 py-4 font-semibold">Category Name</th>
            <th className="px-6 py-4 font-semibold">Description</th>
            <th className="px-6 py-4 font-semibold text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {categoryData.map((data, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="flex gap-2 items-center">
                  <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                    <Image
                      src={data.imageUrl}
                      width={52}
                      height={52}
                      alt={data.name}
                      className="aspect-square object-contain"
                    />
                  </div>
                  <span>{data.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-medium max-w-[300px] truncate">
                {data.description}
              </td>
              <td className="px-6 py-4 flex items-center justify-center gap-3 text-gray-600">
                <button className="hover:text-blue-600 transition-colors">
                  <FiEdit2 size={20} />
                </button>
                <button className="hover:text-red-600 transition-colors">
                  <FiTrash2 size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryTable;