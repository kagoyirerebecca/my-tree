'use client';

import React, { useState, useEffect } from 'react';
import LocationPin from './LocationPin';
import StoryPopup from './StoryPopUp';
import StoryView from './StoryView';
import FullscreenImage from './FullScreenImage';

// Sample data type
interface StoryData {
  author: string;
  content: string;
  images: string[];
}

const LocationStoryViewer: React.FC = () => {
  const [showLocationPin, setShowLocationPin] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Sample data - replace with your actual data
  const storyData: StoryData = {
    author: "User Name",
    content: "Story content goes here with more details about the location and experience...",
    images: [
      "/api/placeholder/100/100",
      "/api/placeholder/100/100",
      "/api/placeholder/100/100"
    ]
  };

  useEffect(() => {
    // Show location pin after component mount
    setTimeout(() => setShowLocationPin(true), 1000);
    // Show popup after pin appears
    setTimeout(() => setShowPopup(true), 5000);
  }, []);

  const handlePopupClick = () => {
    setShowPopup(false);
    setShowStory(true);
  };

  return (
    <div className="relative h-screen w-full bg-gray-100">
      <div className="h-full w-full bg-gray-200">
        {showLocationPin && <LocationPin />}
        
        {showPopup && <StoryPopup onClick={handlePopupClick} />}
        
        {showStory && (
          <StoryView 
            storyData={storyData}
            onClose={() => setShowStory(false)}
            onImageClick={(index) => setSelectedImage(index)}
          />
        )}
        
        {selectedImage !== null && (
          <FullscreenImage 
            imageUrl={storyData.images[selectedImage]}
            onClose={() => setSelectedImage(null)}
          />
        )}
      </div>
    </div>
  );
};

export default LocationStoryViewer;