'use client';

import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationPinProps {
  className?: string;
}

const LocationPin: React.FC<LocationPinProps> = ({ className = '' }) => {
  return (
    <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ${className}`}>
      <div className="animate-bounce">
        <MapPin className="w-8 h-8 text-green-600" />
      </div>
    </div>
  );
};

export default LocationPin;