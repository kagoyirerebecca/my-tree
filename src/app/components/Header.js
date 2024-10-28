import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-white rounded-[30px] px-5 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.1)] flex items-center gap-3 z-[1] min-w-[200px] justify-between">
      {/* Left section with Eco Forest text and eco icon */}
      <div className="flex items-center gap-1">
        <Image 
          src="/forest.png"
          alt="Eco"
          width={98}
          height={16}
          className="object-contain"
        />
      </div>

      {/* Middle section with green circle and leaf image */}
      <div className="bg-[#04250E] rounded-full w-7 h-7 flex items-center justify-center">
        <Image 
          src="/leaf.png"
          alt="Leaf"
          width={16}
          height={16}
          className="object-contain"
        />
      </div>

      {/* Right section with user icon */}
      <div className="flex items-center">
        <Image 
          src="/group.png"
          alt="User"
          width={20}
          height={20}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Header;