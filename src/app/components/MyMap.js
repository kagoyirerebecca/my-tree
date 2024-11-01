"use client"; // Ensure this component is rendered on the client

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

let L;
if (typeof window !== 'undefined') {
  L = require('leaflet');
}

const createCustomIcon = () => {
  const svgTemplate = `
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <filter id="shadow">
        <feDropShadow dx="0" dy="1" stdDeviation="1" flood-opacity="0.3"/>
      </filter>
      <path d="M24 0 C13 0 4 9 4 20 C4 31 24 48 24 48 C24 48 44 31 44 20 C44 9 35 0 24 0Z" 
            fill="#4CAF50" filter="url(#shadow)"/>
      <path d="M24 8 L30 20 H26 V24 H22 V20 H18 L24 8Z" 
            fill="white"/>
    </svg>
  `;

  return L.divIcon({
    html: svgTemplate,
    className: 'custom-marker',
    iconSize: [48, 48],
    iconAnchor: [24, 48],
    popupAnchor: [0, -48]
  });
};

const mapStyles = {
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: 0,
};

const markerStyles = `
  .custom-marker {
    background: transparent;
    border: none;
  }
  
  .popup-bubble {
    position: absolute;
    background: white;
    padding: 12px 16px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    color: #4CAF50;
    display: flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    pointer-events: none; /* Disable pointer events until visible */
    width: fit-content;
  }

  .popup-bubble::after {
    content: '';
    position: absolute;
    top: 100%; /* Positioning the triangle */
    left: 50%; /* Centering the triangle */
    margin-left: -6px; /* Center the triangle */
    border-width: 6px;
    border-style: solid;
    border-color: white transparent transparent transparent; /* Triangle color */
  }

  .popup-bubble.visible {
    opacity: 1; /* Make visible */
    pointer-events: auto; /* Enable pointer events */
  }

  .popup-content {
    display: flex;
    align-items: center;
  }

  .popup-content img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .popup-text {
    margin-left: 12px; /* Spacing between image and text */
    flex-grow: 1; /* Allow the text to take up remaining space */
  }

  .popup-line {
    height: 30px;
    width: 2px; /* Width of the vertical line */
    background-color: #4CAF50; /* Color of the line */
    margin: 0 12px; /* Spacing around the line */
  }

  .text-line {
    line-height: 1.2; /* Adjust line height for better spacing */
  }

  /* Dark green filter for map tiles */
  .leaflet-tile {
    filter: hue-rotate(80deg) saturate(200%) brightness(0.5) contrast(1.2) !important;
  }
  
  /* Map background color to enhance the dark theme */
  .leaflet-container {
    background-color: #013220 !important;
  }

  .story-popup {
    position: fixed;
    bottom: -100%; /* Start off-screen */
    left: 0;
    right: 0;
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: bottom 0.5s ease; /* Slide effect */
    z-index: 1000; /* Above everything */
  }

  .story-popup.show {
    bottom: 0; /* Slide up to visible */
  }
`;

const MapWithMarker = ({ customIcon, onMarkerClick }) => (
  <MapContainer 
    center={[37.7577, -122.4376]} 
    zoom={10} 
    style={mapStyles}
    className="dark-forest-map"
  >
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      opacity={1}
    />
    <Marker position={[37.7577, -122.4376]} icon={customIcon} eventHandlers={{ click: onMarkerClick }} />
  </MapContainer>
);

// Main component for rendering the map with the popup
const GreenTreeMap = () => {
  const [customIcon, setCustomIcon] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showStory, setShowStory] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 253, left: 45 });

  useEffect(() => {
    if (L) setCustomIcon(createCustomIcon());

    const popupTimer = setTimeout(() => {
      setShowPopup(true);
      updatePopupPosition();
    }, 500); // Delay for initial popup

    return () => clearTimeout(popupTimer);
  }, []);

  const handleMarkerClick = () => {
    // When the user clicks the popup, show the story
    if (showPopup) {
      setShowPopup(false); // Hide the initial popup
      setShowStory(true);  // Show the story popup
    }
  };

  const updatePopupPosition = () => {
    const markerElement = document.querySelector('.custom-marker');
    if (markerElement) {
      const markerRect = markerElement.getBoundingClientRect();
      setPopupPosition({
        top: markerRect.top - 60,
        left: markerRect.left + markerRect.width / 2 
      });
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updatePopupPosition);
    return () => window.removeEventListener('resize', updatePopupPosition);
  }, []);

  if (!customIcon) return null;

  return (
    <>
      <style>{markerStyles}</style>
      <MapWithMarker customIcon={customIcon} onMarkerClick={handleMarkerClick} />

      {showPopup && (
        <div
          className="popup-bubble visible"
          style={{
            position: 'absolute',
            top: popupPosition.top,
            left: popupPosition.left,
          }}
        >
          <div className="popup-content" onClick={handleMarkerClick}> {/* Add click event here */}
            <img src="/planted.jpg" alt="Plant" />
            <div className="popup-line"></div>
            <div className="popup-text">
              <div className="text-line">Want to Get to Know Me?</div>
              <div className="text-line"><strong>Read My Story!</strong> 😊</div>
            </div>
          </div>
        </div>
      )}

      {/* Story Popup */}
      <div className={`story-popup ${showStory ? 'show' : ''}`}>
        <h2>My name is Kris</h2>
        <p>My Planter is Kristian</p>
        <p>
          Before we introduced agroforest trees to our farms, the heavy rains would wash away the fertile soil, leaving us with poor harvests and not enough grass for our cows to produce milk for our children. The land was struggling, and so were we.
        </p>
        <p>
          But thanks to the collective efforts of our eco contributors, everything is beginning to change. The land is healing, and so are we.
        </p>
        <p>
          "Planting mixed-crop trees not only supports our daily livelihoods but also restores our lives and the land we depend on." Agro forest trees
        </p>
        <button onClick={() => setShowStory(false)}>Close</button>
      </div>
    </>
  );
};

export default GreenTreeMap;
