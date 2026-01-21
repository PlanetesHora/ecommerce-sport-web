import Image from "next/image";
import ProductActions from "../../components/product-detail/product-actions";
import priceFormatter from "@/app/utils/price-formatter";
import { getProductDetail } from "@/app/services/product.service";
import { getImageUrl } from "@/app/lib/api";


export type TPageProps = {
  params: Promise<{ id: string }>;
};

const ProductDetail = async ({ params }: TPageProps) => {
  const { id } = await params;

  // Ambil data dari API (Server Side)
  const product = await getProductDetail(id);

  if (!product) {
    return <div className="text-center py-20">Product not found</div>;
  }

  // Kirim data ke Client Component
  return (
    <main className="pagar-konten py-12 lg:py-20 flex flex-col md:flex-row gap-8 lg:gap-16 items-start mt-8 relative">
      <div className="bg-primary-light aspect-square md:w-1/2 max-w-[500px] flex justify-center items-center overflow-hidden mx-auto">
        <Image src={getImageUrl(product.imageUrl)} width={500} height={500} alt={product.name} className="aspect-square object-contain w-4/5 h-4/5" priority />
      </div>

      <div className="w-full md:w-1/2 flex flex-col justify-center -translate-x-4 translate-y-0">
        <h1 className="font-bold text-3xl lg:text-4xl mb-4 leading-tight">{product.name}</h1>
        <div className="bg-primary-light rounded-full text-primary py-1.5 px-4 text-sm font-medium w-fit mb-6">
            {product.category.name}
        </div>
        <p className="leading-relaxed text-gray-600 mb-8 text-sm lg:text-base">{product.description}</p>
        <div className="text-primary text-2xl lg:text-3xl font-bold mb-10">{priceFormatter(product.price)}</div>
        <div className="mb-5 text-sm text-gray-500">Stock Product : {product.stock}</div>
        
        {/* onAddToCart dikosongkan saja, karena handle-nya sudah ada di dalam ProductActions via Zustand */}
        <ProductActions 
          product={product} 
          stock={product.stock} 
        />
      </div>
    </main>
  );
};

export default ProductDetail;