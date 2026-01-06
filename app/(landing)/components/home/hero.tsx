import { FiFastForward } from "react-icons/fi";
import Button from "../ui/button";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* BACKGROUND BASKETBALL */}
      <Image
        src="/images/img-basketball.png"
        width={432}
          height={423}
          alt="image sporton"
          className="grayscale absolute left-[120px] top-1/2-translate-y-1/2 opacity20 grayscale z-[1] pointer-events-none"/>
      <div className="container mx-auto flex h-full items-center">
        {/* LEFT */}
        <div className="relative z-10 w-[55%]">
          <div className="mb-6 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm italic text-primary">
            Friday Sale, 50%
          </div>

          {/* TITLE */}
          <div className="max-w-[640px]">
            <h1 className="font-extrabold italic text-[88px] leading-[1.05] text-black">
              WEAR YOUR
            </h1>

            <h1 className="font-extrabold italic text-[88px] leading-[1.05] text-gray-00">
              TOP-QUALITY
            </h1>

            <h1 className="font-extrabold italic text-[88px] leading-[1.05] text-gray-500">
              SPORTSWEAR
            </h1>
          </div>

          <p className="mt-8 max-w-[520px] leading-loose text-gray-600">
            Engineered for endurance and designed for speed. Experience gear
            that moves as fast as you do. Premium fabrics. Unmatched comfort.
            Limitless motion.
          </p>

          <div className="mt-12 flex items-center gap-6">
            <Button>
              Explore More <FiFastForward />
            </Button>

            <Button variant="ghost" className="flex items-center gap-3">
              Watch Video
              <Image
                src="/images/icon-play-video.svg"
                alt="play video"
                width={28}
                height={28}
              />
            </Button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative w-[45%]">
          <Image
            src="/images/img-hero.png"
            width={760}
            height={940}
            alt="hero product"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20"
            priority
          />
        </div>
      </div>

      {/* ORNAMENT */}
      <Image
        src="/images/img-ornament-hero.svg"
        width={480}
        height={480}
        alt="ornament"
        className="absolute right-[-280px] top-1/2 -translate-y-1/2 z-0"
      />
    </section>
  );
};

export default HeroSection;
