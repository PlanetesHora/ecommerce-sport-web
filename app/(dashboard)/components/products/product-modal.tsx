import Button from "@/app/(landing)/components/ui/button";
import Modal from "../ui/modal";
import ImageUploadPreview from "../ui/image-upload-preview";
import { useState } from "react";

type TProductModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ProductModal = ({ isOpen, onClose }: TProductModalProps) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Add New Product">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Sisi Kiri: Upload Gambar */}
          <div className="w-full md:w-[200px] shrink-0">
            <label className="text-sm font-semibold mb-2 block">Product Image</label>
            <ImageUploadPreview
              value={imagePreview}
              onChange={(file) => {
                setImagePreview(URL.createObjectURL(file));
              }}
              className="h-[200px]"
            />
          </div>

          {/* Sisi Kanan: Input Detail */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="input-group-admin">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                placeholder="e. g. Running Shoes"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="input-group-admin">
                <label htmlFor="price">Price (IDR)</label>
                <input type="number" id="price" placeholder="0" />
              </div>
              <div className="input-group-admin">
                <label htmlFor="stock">Stock</label>
                <input type="number" id="stock" placeholder="0" />
              </div>
            </div>

            <div className="input-group-admin">
              <label htmlFor="category">Category</label>
              <select id="category" defaultValue="">
                <option value="" disabled>Select Category</option>
                <option value="running">Running</option>
                <option value="football">Football</option>
              </select>
            </div>
          </div>
        </div>

        {/* Bagian Bawah: Deskripsi (Full Width) */}
        <div className="input-group-admin">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            rows={4}
            placeholder="Product Details..."
          ></textarea>
        </div>

        {/* Tombol Action */}
        <div className="flex justify-end mt-2">
          <Button className="bg-[#FF6B4A] hover:bg-[#ff5733] text-white px-8 py-2.5 rounded-lg font-semibold transition-all">
            Create Product
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;