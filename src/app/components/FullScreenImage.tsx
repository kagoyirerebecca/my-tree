'use client';

import React from 'react';
import { X } from 'lucide-react';

interface FullscreenImageProps {
  imageUrl: string;
  onClose: () => void;
}

const FullscreenImage: React.FC<FullscreenImageProps> = ({ imageUrl, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <img
        src={imageUrl}
        alt="Enlarged view"
        className="max-w-full max-h-full object-contain"
      />
      <button 
        className="absolute top-4 right-4 text-white"
        onClick={onClose}
      >
        <X className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FullscreenImage;