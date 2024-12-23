import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-white rounded-full px-4 py-1 shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex items-center gap-2 z-[1] min-w-[260px] justify-between">
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
      <div className="bg-[#04250E]  w-16 h-10 rounded-full flex items-center justify-center">  {/* Adjusted size */}
      <svg width="28" height="25" viewBox="0 0 28 25" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M3.5 3.57143H0C0 10.4743 5.48516 16.0714 12.25 16.0714V24.1071C12.25 24.5982 12.6438 25 13.125 25H14.875C15.3562 25 15.75 24.5982 15.75 24.1071V16.0714C15.75 9.16853 10.2648 3.57143 3.5 3.57143ZM24.5 0C19.8953 0 15.8922 2.59487 13.7977 6.42857C15.3125 8.11384 16.4336 10.1618 17.0242 12.433C23.1875 11.7801 28 6.46763 28 0H24.5Z" fill="white"/>
      </svg>
      </div>

      <div className="flex items-center">
        <Link href="/users">
        <svg width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M3.75 7.5C5.12891 7.5 6.25 6.37891 6.25 5C6.25 3.62109 5.12891 2.5 3.75 2.5C2.37109 2.5 1.25 3.62109 1.25 5C1.25 6.37891 2.37109 7.5 3.75 7.5ZM21.25 7.5C22.6289 7.5 23.75 6.37891 23.75 5C23.75 3.62109 22.6289 2.5 21.25 2.5C19.8711 2.5 18.75 3.62109 18.75 5C18.75 6.37891 19.8711 7.5 21.25 7.5ZM22.5 8.75H20C19.3125 8.75 18.6914 9.02734 18.2383 9.47656C19.8125 10.3398 20.9297 11.8984 21.1719 13.75H23.75C24.4414 13.75 25 13.1914 25 12.5V11.25C25 9.87109 23.8789 8.75 22.5 8.75ZM12.5 8.75C14.918 8.75 16.875 6.79297 16.875 4.375C16.875 1.95703 14.918 0 12.5 0C10.082 0 8.125 1.95703 8.125 4.375C8.125 6.79297 10.082 8.75 12.5 8.75ZM15.5 10H15.1758C14.3633 10.3906 13.4609 10.625 12.5 10.625C11.5391 10.625 10.6406 10.3906 9.82422 10H9.5C7.01562 10 5 12.0156 5 14.5V15.625C5 16.6602 5.83984 17.5 6.875 17.5H18.125C19.1602 17.5 20 16.6602 20 15.625V14.5C20 12.0156 17.9844 10 15.5 10ZM6.76172 9.47656C6.30859 9.02734 5.6875 8.75 5 8.75H2.5C1.12109 8.75 0 9.87109 0 11.25V12.5C0 13.1914 0.558594 13.75 1.25 13.75H3.82422C4.07031 11.8984 5.1875 10.3398 6.76172 9.47656Z" fill="#173202"/>
        </svg>

        </Link>
      </div>
    </div>
  );
};

export default Header;
