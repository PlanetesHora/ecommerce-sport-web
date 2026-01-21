import { getImageUrl } from "@/app/lib/api";
import { Category } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

type TCategoriesProps = {
  categories: Category[];
};

const CategoriesSection = ({ categories }: TCategoriesProps) => {
  console.log(categories);

  return (
    <section id="category-section" className="pagar-konten mt-20 lg:mt-32 mb-20">
      
      {/* HEADER SECTION untuk Judul dan Tombol See All */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h2 className="font-bold text-2xl md:text-3xl text-[#1A1A1A]">Browse By Categories</h2>
        
        <Link 
          href="#" 
          className="group flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
        >
          <span>See All Categories</span>
          <FiArrowRight size={20} className="transition-transform group-hover:translate-x-1"/>
        </Link>
      </div>

      {/* GRID KATEGORI */}
      <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-6 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            className="group rounded-2xl bg-[#F8F8F8] p-6 md:p-8 flex flex-col items-center justify-center 
                       transition-all duration-300 hover:bg-white hover:shadow-2xl hover:shadow-primary/10 
                       hover:-translate-y-2 cursor-pointer border border-transparent hover:border-primary/20"
            key={category._id}
          >
            <div className="relative w-20 h-20 mb-4">
              <Image
                src={getImageUrl(category.imageUrl)}
                alt={category.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="text-dark font-bold text-base md:text-lg text-center group-hover:text-primary transition-colors">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;