import Image from "next/image";
import Link from "next/link";
import Button from "../ui/button";
import { FiPlus } from "react-icons/fi";

const productList = [
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "hyperfast-shoes1.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "rockets-tennis1.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "slowlivin1.png",
  },
  {
    name: "SportsOn Hypersoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "hypersoccer-v21.png",
  },
  {
    name: "SportsOn Hypersoccer v2",
    category: "Football",
    price: 458000,
    imgUrl: "hypersoccer-v22.png",
  },
  {
    name: "SportsOn Slowlivin",
    category: "Running",
    price: 119000,
    imgUrl: "slowlivin2.png",
  },
  {
    name: "SportsOn Hyperfast Shoes",
    category: "Running",
    price: 329000,
    imgUrl: "hyperfast-shoes2.png",
  },
  {
    name: "SportsOn Rockets Tennis",
    category: "Tennis",
    price: 999000,
    imgUrl: "rockets-tennis2.png",
  },
];

const ProductsSection = () => {
  return (
    <section id="products-section" className="pagar-konten mt-20 lg:mt-32 mb-32">
      <h2 className="font-bold italic text-3xl md:text-4xl text-center mb-12 uppercase tracking-tight">
        <span className="text-primary">OUR </span>PRODUCTS
      </h2>

      {/*GRID PRODUK*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 md:gap-8">
        {productList.map((product, index) => (
          <Link
            href="#"
            key={index}
            className="group block p-3 bg-white rounded-2xl border border-gray-100 transition-all duration-300 hover:drop-shadow-xl  hover:shadow-primary/5 hover:-translate-y-1"
          >
            {/*BOX GAMBAR*/}
            <div className="bg-primary-light rounded-xl aspect-square w-full flex justify-center items-center relative overflow-hidden">
              <Image
                src={`/images/products/${product.imgUrl}`}
                alt={product.name}
                width={300}
                height={300}
                className="aspect-square object-contain p-6 transition-transform duration-500 group-hover:scale-110"
              />

              {/*BUTTON PLUS*/}
              <Button className="w-10 h-10 p-0! absolute right-3 top-3 rounded-full opacity-100 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                <FiPlus size={20} />
              </Button>
            </div>

            {/*INFO PRODUK*/}
            <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
            <div className="flex justify-between items-center mt-3">
              <div className="text-gray-400 text-sm font-medium uppercase tracking-wider">{product.category}</div>
              <div className="font-bold text-lg text-primary">
                {Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumSignificantDigits: 3,
                }).format(product.price)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;