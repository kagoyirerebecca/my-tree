'use client';

import React from 'react';

interface StoryPopupProps {
  onClick: () => void;
}

const StoryPopup: React.FC<StoryPopupProps> = ({ onClick }) => {
  return (
    <div 
      className="absolute left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 
                 bg-white rounded-lg p-3 shadow-lg cursor-pointer animate-fade-in"
      onClick={onClick}
    >
      <p className="text-sm">Click to view story</p>
    </div>
  );
};

export default StoryPopup;