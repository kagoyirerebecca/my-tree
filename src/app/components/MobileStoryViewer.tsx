// MobileStoryViewer.tsx
"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const MobileStoryViewer: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  // Open the modal and set the selected image
  const openImageModal = (src: string, index: number) => {
    setCurrentImage(src);
    setSelectedImageIndex(index);
    setModalOpen(true);
  };

  // Close the modal
  const closeImageModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
    setSelectedImageIndex(null);
  };

  const SoundIcon = () => (
    <svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.46632 1.91162L4.37708 5.00016H0.833333C0.372917 5.00016 0 5.37308 0 5.83349V10.8335C0 11.2936 0.372917 11.6668 0.833333 11.6668H4.37708L7.46632 14.7554C7.98819 15.2772 8.88889 14.9106 8.88889 14.1661V2.50085C8.88889 1.75572 7.9875 1.39044 7.46632 1.91162ZM15.5677 0.138008C15.1799 -0.116506 14.6587 -0.00921405 14.4042 0.379328C14.1493 0.767175 14.2576 1.28836 14.6455 1.54287C16.9465 3.05294 18.3198 5.59148 18.3198 8.33384C18.3198 11.0762 16.9465 13.6147 14.6455 15.1248C14.2576 15.379 14.1493 15.9005 14.4042 16.288C14.6486 16.6599 15.1656 16.7936 15.5677 16.5293C18.3427 14.7078 20 11.6436 20 8.33349C20 5.02342 18.3427 1.95954 15.5677 0.138008ZM16.6667 8.33349C16.6667 6.12759 15.5535 4.09947 13.6885 2.90849C13.3 2.66058 12.7847 2.77586 12.5385 3.16752C12.2924 3.55919 12.4073 4.07759 12.7958 4.32586C14.176 5.20745 15 6.70537 15 8.33349C15 9.96162 14.176 11.4595 12.7958 12.3411C12.4073 12.589 12.2924 13.1075 12.5385 13.4995C12.7646 13.8592 13.2719 14.0252 13.6885 13.7585C15.5535 12.5675 16.6667 10.5397 16.6667 8.33349ZM11.7441 5.6644C11.342 5.44461 10.8347 5.5894 10.6118 5.99252C10.3899 6.39565 10.5368 6.90224 10.9399 7.12481C11.3882 7.37099 11.6667 7.83454 11.6667 8.33349C11.6667 8.8328 11.3882 9.29599 10.9403 9.54217C10.5372 9.76474 10.3903 10.2713 10.6122 10.6745C10.8354 11.0793 11.3431 11.2231 11.7444 11.0026C12.7247 10.4627 13.3337 9.44009 13.3337 8.33315C13.3337 7.2262 12.7247 6.20398 11.7441 5.6644Z" fill="white"/>
    </svg>
  );

  const DirectionsIcon = () => (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24.5415 11.3926L13.6074 0.458496C12.9961 -0.152832 12.0044 -0.152832 11.3926 0.458496L0.458496 11.3926C-0.152832 12.0044 -0.152832 12.9956 0.458496 13.6074L11.3926 24.5415C12.0039 25.1533 12.9956 25.1533 13.6074 24.5415L24.5415 13.6074C25.1528 12.9956 25.1528 12.0044 24.5415 11.3926ZM19.6108 12.0059L15.499 15.8013C15.249 16.0322 14.8433 15.855 14.8433 15.5142V12.8906H10.1558V16.0156C10.1558 16.2314 9.98096 16.4062 9.76514 16.4062H8.20264C7.98682 16.4062 7.81201 16.2314 7.81201 16.0156V12.1094C7.81201 11.2466 8.51172 10.5469 9.37451 10.5469H14.8433V7.92334C14.8433 7.58301 15.2485 7.40527 15.499 7.63623L19.6108 11.4316C19.7783 11.5864 19.7783 11.8511 19.6108 12.0059Z" fill="white"/>
    </svg>
  );

  return (
    <div>
      {/* Main Section */}
      <div style={{
        position: 'absolute', top: 100, left: 0, right: 0, bottom: 0,
        zIndex: 1,
        padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        display: 'flex', flexDirection: 'row', justifyContent: 'space-between',
        color: '#fff', fontSize: '14px', fontWeight: '300',
        backgroundImage: 'url("/path/to/your/background.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        {/* Left Section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <span>CO₂ Removed</span>
                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>9.99 Kg</p>
              </div>
              <div>
                <span>Height</span>
                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>139 cm</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', textAlign: 'right' }}>
              <div>
                <span>Weather</span>
                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>Rainy</p>
                <p style={{ margin: '0' }}>17°C</p>
              </div>
              <div>
                <span>Age</span>
                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '16px' }}>139 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Photo Gallery Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'absolute',
        left: '330px',
        top: '400px',
        zIndex: 5,
      }}>
        {['/tree.jpg', '/tree.jpg', '/tree.jpg', '/tree.jpg'].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Story ${index + 1}`}
            style={{
              width: selectedImageIndex === index ? '36px' : '32px',
              height: selectedImageIndex === index ? '36px' : '32px',
              cursor: 'pointer',
              border: selectedImageIndex === index ? '2px solid #FFFFFF' : 'none',
              borderRadius: '8px',
            }}
            onClick={() => openImageModal(src, index)}
          />
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="modal">
          <span className="close-btn" onClick={closeImageModal}>
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.39489 0.636363L6.4233 4.23438H6.51989L8.57244 0.636363H12.3153L8.62074 6.81818L12.4602 13H8.62074L6.51989 9.32955H6.4233L4.32244 13H0.507102L4.2983 6.81818L0.627841 0.636363H4.39489Z" fill="#173202"/>
            </svg>
          </span>
          {currentImage && (
            
              <Image src={currentImage} alt="Enlarged View" layout="fill"  max-width="100%" max-height="100%" />
           
          )}
          {/* Bottom Label */}
          <div className="bottom-label">
            <p>Updated on 23.11.2024</p>
          </div>
        </div>
      )}

      {/* Bottom Button */}
      <div style={{
        position: 'absolute',
        bottom: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 2
      }}>
        <button style={{
          backgroundColor: '#fff',
          color: '#04250E',
          border: 'none',
          borderRadius: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
          transition: 'background-color 0.3s'
        }}>
          <strong>Plant your Tree</strong>
        </button>
      </div>
       
      <div style={{
        position: 'absolute',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '280px',
        zIndex: 2
      }}>
        <SoundIcon />
        <DirectionsIcon />
        {/* Add other icons similarly */}
      </div>

      <style jsx>{`
        .modal {
          display: flex;
          position: fixed;
          z-index: 10;
          left: ${selectedImageIndex === 0 ? '813px' : '813px'};
          top: ${selectedImageIndex === 0 ? '400px' : '400px'};
          width: 239px;
          height: 250px;
          background-color: #FFFFFF;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 4px;
          border: 1px solid #FFFFFF; /* White border around the image */
        }

       

        .close-btn {
          border:0px red solid ;
          z-index:100;
          position: absolute;
          top: -22px;
          right: -13px;
          font-size: 24px;
          font-weight: bold;
          color: white;
          background: #FFFFFF;
          padding: 8px;
          border-radius: 50%;
          cursor: pointer;
        }

        .bottom-label {
          position: absolute;
          bottom: 0;
          width: 100%;
          background-color: #FFFFFF; /* White background for the label */
          text-align: center;
          padding: 5px 0;
          font-size: 12px;
          color: #333;
          border-radius: 0 0 8px 8px;
        }
      `}</style>
    </div>
  );
};

export default MobileStoryViewer;
