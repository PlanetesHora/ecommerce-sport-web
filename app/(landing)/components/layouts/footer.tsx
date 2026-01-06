import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-dark-alternate text-white mt-32 md:mt-52">
      <div className="pagar-konten flex flex-col lg:flex-row justify-between pt-16 pb-16 gap-12 lg:gap-20">
        <div className="w-full lg:max-w-sm">
          <Image
            src="/images/logo-footer.svg"
            alt="logo sporton footer"
            width={187}
            height={44}
            className="w-[150px] md:w-[187px] h-auto"
          />
          <p className="mt-8 text-white-400 leading-relaxed">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do.
          </p>
        </div>
        <div className="w-full lg:flex-1 grid grid-cols-2 md:grid-cols-2 gap-8 lg:justify-items-end">
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-lg mb-2">Sitemap</h4>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">Home</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">Categories</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">Products</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">About Us</Link>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="font-bold text-lg mb-2">Social Media</h4>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">Facebook</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">TikTok</Link>
            <Link href="#" className="text-white-400 hover:text-primary transition-colors">YouTube</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-t-white/10">
        <div className="pagar-konten py-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>SportsOn © 2025 All Rights Reserverd.</div>

          <div className="flex gap-8 text-sm text-gray-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;