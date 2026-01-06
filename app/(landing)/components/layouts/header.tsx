import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-50">
      <div className="pagar-konten flex items-center justify-between py-4 md:py-6">
        <Image
          src="/images/logo.svg"
          alt="sporton logo"
          width={127}
          height={30}
          className="w-[100px] md:w-[127px] h-auto"
        />
        <nav className="hidden md:flex items-center gap-6 lg:gap-12 xl:gap-20 font-medium text-sm lg:text-base">
          <Link
            href="#"
            className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1"
          >
            Home
          </Link>
          <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Category</Link>
          <Link href="#" className="hover:text-primary transition-colors whitespace-nowrap">Explore Products</Link>
        </nav>
        <div className="flex items-center gap-4 md:gap-8">
          <FiSearch size={22} />
          <div className="relative">
            <FiShoppingBag size={22} />
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
              3
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;