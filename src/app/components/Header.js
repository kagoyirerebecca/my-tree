import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex items-center gap-4 z-[1] min-w-[300px] justify-between">
      {/* Left section with Eco Forest text and eco icon */}
      <div className="flex items-center gap-2">
        <Image 
          src="/forest.png"
          alt="Eco"
          width={90}
          height={20}  // Adjust height for better alignment
          className="object-contain"
        />
      </div>

      {/* Middle section with green circle and leaf image */}
      <div className="bg-[#04250E] rounded-full w-8 h-8 flex items-center justify-center">  {/* Adjusted size */}
        <Image 
          src="/leaf.png"
          alt="Leaf"
          width={20}  // Adjusted size
          height={20} // Adjusted size
          className="object-contain"
        />
      </div>

      <div className="flex items-center">
        <Link href="/users">
          <Image 
            src="/group.png"
            alt="User"
            width={24}  // Adjusted size
            height={24} // Adjusted size
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
