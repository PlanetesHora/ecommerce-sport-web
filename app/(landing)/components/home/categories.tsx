import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categoryList = [
  { name: "Running", imgUrl: "category-running.png" },
  { name: "Tennis", imgUrl: "category-tennis.png" },
  { name: "Basketball", imgUrl: "category-basketball.png" },
  { name: "Football", imgUrl: "category-football.png" },
  { name: "Badminton", imgUrl: "category-badminton.png" },
  { name: "Swimming", imgUrl: "category-swimming.png" },
];

const CategoriesSection = () => {
  return (
    /* PERBAIKAN 1: 
      - Tambahkan mt-24 atau mt-32 untuk memberi jarak dari Hero.
      - Tambahkan px-4 atau px-[98px] agar sejajar dengan container atas.
    */
    <section id="category-section" className="container mx-auto mt-32">
      
      {/* PERBAIKAN 2: Gunakan items-end atau items-center agar teks sejajar dengan link */}
      <div className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-3xl text-[#1A1A1A]">Browse By Categories</h2>
        
        <Link 
          href="#" 
          className="flex items-center gap-2 text-[#FF5F3F] font-semibold hover:underline transition-all"
        >
          <span>See All Categories</span>
          <FiArrowRight size={20} />
        </Link>
      </div>

      {/* PERBAIKAN 3: Penyesuaian Grid Gap */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categoryList.map((category, index) => (
          <div
            className="group rounded-2xl bg-[#F8F8F8] p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-2 cursor-pointer"
            key={index}
          >
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={`/images/categories/${category.imgUrl}`}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-[#FF5F3F] font-bold text-lg text-center">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;