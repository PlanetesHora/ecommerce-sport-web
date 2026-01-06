import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    // Gunakan min-h-screen agar kalau kontennya panjang, section-nya ikut memanjang
    <section id="hero-section" className="pagar-konten relative min-h-screen flex items-center pt-28 lg:pt-0 overflow-hidden translate-y-8">
      
      {/* Background Basketball dibuat lebih kecil & transparan agar tidak "penuh" */}
      <Image
        src="/images/img-basketball.png"
        width={460} 
        height={460}
        alt="image sporton"
        className="grayscale absolute left-0 top-1/4 opacity 20 pointer-events-none hidden md:block -translate-y-24 -translate-x-16"
      />

      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* SISI KIRI: TEKS */}
        <div className="w-full lg:w-[55%]">
          <div className="text-primary italic font-semibold mb-3 translate-x-40">Friday Sale, 50%</div>
          
          {/* PERUBAHAN UTAMA: Ukuran font diperkecil untuk layar menengah */}
          <h1 className="font-extrabold italic leading-[1.05] bg-gradient-to-b from-black to-[#979797] bg-clip-text text-transparent
            text-4xl       /* HP */
            md:text-6xl    /* Tablet */
            xl:text-[75px] /* Layar kamu (1272px) - diturunin dikit dari 80px biar lega */
            2xl:text-[95px] /* Monitor Gede */
          translate-x-38">
            WEAR YOUR <br /> TOP-QUALITY <br /> SPORTSWEAR
          </h1>

          <p className="w-full md:w-5/6 mt-6 text-sm md:text-base leading-relaxed text-gray-600 translate-x-40">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="flex flex-wrap gap-4 mt-8 translate-x-40">
            <Button>
              Explore More <FiFastForward />
            </Button>
            <Button variant="ghost" className="flex items-center gap-2">
              Watch Video
              <Image src="/images/icon-play-video.svg" alt="icon playvideo" width={24} height={24} />
            </Button>
          </div>
        </div>

        {/* SISI KANAN: GAMBAR */}
        <div className="relative w-full lg:w-[45%] flex justify-center lg:justify-end">
          <Image
            src="/images/img-hero.png"
            width={700} 
            height={950}
            alt="image sporton hero"
            // Gambar dibatasi lebarnya agar tidak menabrak teks di layar < 1300px
            className="w-full max-w-[320px] md:max-w-[420px] xl:max-w-[500px] h-auto z-20 relative -translate-x-16"
            priority
          />
          
          {/* Ornamen Lingkaran dibuat mengikuti ukuran gambar */}
          <Image
            src="/images/img-ornamen-hero.svg"
            width={420}
            height={420}
            alt="ornament"
            className="absolute -right-[300px] top-1/2 -translate-y-1/2 "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;