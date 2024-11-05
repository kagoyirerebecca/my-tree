import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Assuming you have a CSS module or global stylesheet

const EcoForest = () => {
  return (
    <div style={{ 
        position: 'relative', 
        height: '95vh', 
        overflow: 'auto', // Allow scrolling
        maxWidth: '375px', 
        margin: 'auto', 
        marginTop: '5px', 
        color: 'green',
        scrollbarWidth: 'none', // For Firefox
        '-ms-overflow-style': 'none', // For Internet Explorer and Edge
      }}>
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 bg-white rounded-full px-5 py-3 shadow-[0_2px_10px_rgba(0,0,0,0.2)] flex items-center gap-4 z-[1] min-w-[300px] justify-between">
        {/* Left section with Eco Forest text and eco icon */}
        <div className="flex items-center ">
          <Image 
            src="/forest.png"
            alt="Eco"
            width={90}
            height={20}  // Adjust height for better alignment
            className="object-contain"
          />
        </div>
    
        {/* Middle section with green circle and leaf image */}
        <div className="bg-[#04250E] rounded-full w-8 h-8 flex items-center justify-center">  
          <Image 
            src="/leaf.png"
            alt="Leaf"
            width={20}  
            height={20} 
            className="object-contain"
          />
        </div>
    
        <div className="flex items-center">
          <Link href="/users">
            <Image 
              src="/group.png"
              alt="User"
              width={24}  
              height={24} 
              className="object-contain"
            />
          </Link>
        </div>
      </div>
      
      <main style={{ marginTop: '150px' }}> {/* Adjust margin-top to create space below the header */}
        <section>
          <h2>Organization: <span><strong>Kigali FAAM</strong></span></h2>
          <p>Contributor: <span><strong>Kristian GASARO</strong></span></p>
        </section>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
        <section>
          <h3>Beneficiary</h3><br></br>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '5px' }}> {/* Flex container to align items */}
            <Image 
              src="/green.jpg" 
              alt="Beneficiary" 
              width={50} 
              height={50}  
              style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }} // Fully circular with margin
            />
            <div>
              <p>Name:<strong>USANEZA Nadine</strong></p>
              <p>Gender: <strong>Female</strong></p>
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
              <p><strong>Address:</strong> Southern Province, Muhanga District, Munazi Sector, Mukura Village</p>
            </div><br></br>
          </div>
        </section>
       
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
        <section>
          <h3>Beneficiary</h3><br></br>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '5px' }}> {/* Flex container to align items */}
            <Image 
              src="/green.jpg" 
              alt="Beneficiary" 
              width={50} 
              height={50}  
              style={{ borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }} // Fully circular with margin
            />
            <div>
              <p>Name:<strong>USANEZA Nadine</strong></p>
              <p>Gender: <strong>Female</strong></p>
              <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
              <p><strong>Address:</strong> Southern Province, Muhanga District, Munazi Sector, Mukura Village</p>
            </div><br></br>
          </div>
        </section>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
        <section>
          <h3>About Specie</h3>
          <br />
          <p>
            Before we introduced agroforest trees to our farms, the heavy rains would wash away the fertile soil,
            leaving us with poor harvests and not enough grass for our cows to produce milk for our children. 
            The land was struggling, and so were we.
          </p>
          <br />
          <p>
            But thanks to the collective efforts of our eco contributors, everything is beginning to change. 
            The land is healing, and so are we.
          </p>
        </section>
      </main>
    </div>
  );
};

export default EcoForest;
