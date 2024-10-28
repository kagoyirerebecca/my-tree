// MobileStoryViewer.tsx
import React from 'react';

const MobileStoryViewer = () => {
    return (
       
        <div>
           <div style={{
            position: 'absolute', top: 100, left: 0, right: 0, bottom: 0,
            zIndex: 1,
            padding: '20px', boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', // Changed to row
            color: '#fff', fontSize: '14px', fontWeight: '300',
            backgroundImage: 'url("/path/to/your/background.jpg")', // Set background image path
            backgroundSize: 'cover', backgroundPosition: 'center'
           }}>
            {/* Left Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    {/* Left Column */}
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

                    {/* Right Column */}
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

            {/* Photo Gallery Section on the Right */}
           
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                position: 'absolute', // Absolute positioning
                left: '330px', // Adjust distance from the left
                top: '400px' // Position from the top
            }}>
                <img src="tree.jpg" alt="Story 1" style={{ width: '70%', objectFit: 'cover' }} />
                <img src="tree.jpg" alt="Story 2" style={{ width: '70%', objectFit: 'cover' }} />
                <img src="tree.jpg" alt="Story 3" style={{ width: '70%', objectFit: 'cover' }} />
                <img src="tree.jpg" alt="Story 4" style={{ width: '70%', objectFit: 'cover' }} />
            </div>
            <div style={{
                position: 'absolute',
                bottom: '20px', // Distance from the bottom
                left: '50%', // Center horizontally
                transform: 'translateX(-50%)', // Offset to center
                zIndex: 2 // Ensure button is above other content
            }}>
                <button style={{
                    backgroundColor: '#fff',
                    color: '#013220 ',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                    transition: 'background-color 0.3s',
                }}>
                    Plant your Tree
                </button>
            </div>
        </div>
    );
};

export default MobileStoryViewer;
