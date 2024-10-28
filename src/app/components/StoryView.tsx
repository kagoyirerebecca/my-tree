'use client';

import React from 'react';
import { X } from 'lucide-react';
import ImageGallery from './ImageGallery';

interface StoryViewProps {
  storyData: {
    author: string;
    content: string;
    images: string[];
  };
  onClose: () => void;
  onImageClick: (index: number) => void;
}

const StoryView: React.FC<StoryViewProps> = ({ storyData, onClose, onImageClick }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-4 
                   animate-slide-up shadow-lg max-h-[70vh] overflow-y-auto">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold">{storyData.author}</h3>
          <p className="text-sm text-gray-600">{storyData.content}</p>
        </div>
        <button onClick={onClose} className="p-1">
          <X className="w-6 h-6" />
        </button>
      </div>
      <ImageGallery images={storyData.images} onImageClick={onImageClick} />
    </div>
  );
};

export default StoryView;