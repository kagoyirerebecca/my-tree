'use client';

import React from 'react';
import { X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  onImageClick: (index: number) => void;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, onImageClick }) => {
  return (
    <div className="flex gap-2 mt-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="w-16 h-16 rounded-lg overflow-hidden cursor-pointer"
          onClick={() => onImageClick(index)}
        >
          <img
            src={img}
            alt={`Story image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;