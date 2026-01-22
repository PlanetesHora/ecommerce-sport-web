import Image from "next/image";
import { useRef } from "react";
import { FiEdit, FiUploadCloud } from "react-icons/fi";

type TImageUploadPreviewProps = {
  label?: string;
  value?: string | null;
  onChange: (file: File) => void;
  className?: string;
};

const ImageUploadPreview = ({
  label,
  value,
  onChange,
  className,
}: TImageUploadPreviewProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      onChange(file);
    }
  };

  return (
    <div className={className}>
      {label && <label className="text-sm font-semibold mb-2 block">{label}</label>}
      
      <div
        onClick={handleImageClick}
        className="group relative border-2 border-dashed border-primary bg-primary/5 rounded-lg h-50 flex flex-col justify-center items-center cursor-pointer overflow-hidden transition-all hover:bg-primary/10"
      >
        {value ? (
          <div className="w-full h-full relative flex justify-center items-center">
            <Image
              src={value}
              alt="preview product"
              className="w-full h-full object-contain p-2"
              width={190}
              height={190}
            />
            {/* Overlay Perubahan Gambar */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <FiEdit size={20} className="mb-1" />
              <span className="text-xs font-medium">Change Image</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <FiUploadCloud className="text-primary" size={32} />
            <div className="text-center">
              <span className="text-sm font-semibold text-primary block">Click to Upload</span>
              <span className="text-[10px] text-gray-400">PNG, JPG up to 5MB</span>
            </div>
          </div>
        )}
        
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default ImageUploadPreview;