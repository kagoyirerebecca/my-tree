import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; 

const EcoForest = () => {
  return (
    <div style={{ 
        position: 'relative', 
        height: '95vh', 
        overflow: 'auto', 
        maxWidth: '375px', 
        margin: 'auto', 
        marginTop: '5px', 
        color: 'green',
        scrollbarWidth: 'none', 
        '-msOverflowStyle': 'none', 
      }}>
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
      <div className="flex items-center">
        <Link href="/">
        <svg width="29" height="20" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.375 2.42857H0C0 7.12254 3.72207 10.9286 8.3125 10.9286V16.3929C8.3125 16.7268 8.57969 17 8.90625 17H10.0938C10.4203 17 10.6875 16.7268 10.6875 16.3929V10.9286C10.6875 6.2346 6.96543 2.42857 2.375 2.42857ZM16.625 0C13.5004 0 10.784 1.76451 9.36269 4.37143C10.3906 5.51741 11.1514 6.91004 11.5521 8.45446C15.7344 8.01049 19 4.39799 19 0H16.625Z" fill="#275502"/>
        </svg>
        </Link>
      </div>

      <div className="bg-[#04250E]  w-16 h-10 rounded-full flex items-center justify-center">
       
          <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M4.35 8.57143C5.94953 8.57143 7.25 7.29018 7.25 5.71429C7.25 4.13839 5.94953 2.85714 4.35 2.85714C2.75047 2.85714 1.45 4.13839 1.45 5.71429C1.45 7.29018 2.75047 8.57143 4.35 8.57143ZM24.65 8.57143C26.2495 8.57143 27.55 7.29018 27.55 5.71429C27.55 4.13839 26.2495 2.85714 24.65 2.85714C23.0505 2.85714 21.75 4.13839 21.75 5.71429C21.75 7.29018 23.0505 8.57143 24.65 8.57143ZM26.1 10H23.2C22.4025 10 21.682 10.317 21.1564 10.8304C22.9825 11.817 24.2784 13.5982 24.5594 15.7143H27.55C28.352 15.7143 29 15.0759 29 14.2857V12.8571C29 11.2813 27.6995 10 26.1 10ZM14.5 10C17.3048 10 19.575 7.76339 19.575 5C19.575 2.23661 17.3048 0 14.5 0C11.6952 0 9.425 2.23661 9.425 5C9.425 7.76339 11.6952 10 14.5 10ZM17.98 11.4286H17.6039C16.6614 11.875 15.6147 12.1429 14.5 12.1429C13.3853 12.1429 12.3431 11.875 11.3961 11.4286H11.02C8.13812 11.4286 5.8 13.7321 5.8 16.5714V17.8571C5.8 19.0402 6.77422 20 7.975 20H21.025C22.2258 20 23.2 19.0402 23.2 17.8571V16.5714C23.2 13.7321 20.8619 11.4286 17.98 11.4286ZM7.84359 10.8304C7.31797 10.317 6.5975 10 5.8 10H2.9C1.30047 10 0 11.2813 0 12.8571V14.2857C0 15.0759 0.647969 15.7143 1.45 15.7143H4.43609C4.72156 13.5982 6.0175 11.817 7.84359 10.8304Z" fill="white"/>
          </svg>
       
      </div>
    </div>

      
      <main style={{ marginTop: '150px' }}>
        <section>
          <h2>Organization: <span><strong>Kigali FAAM</strong></span></h2>
          <p>Contributor: <span><strong>Kristian GASARO</strong></span></p>
        </section>
        <hr style={{ border: 'none', height: '1px', backgroundColor: 'green', margin: '10px 0' }} />
        <section>
          <h3>Beneficiary</h3><br></br>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '5px' }}> 
            <Image 
              src="/green.jpg" 
              alt="Beneficiary" 
              width={50} 
              height={50}  
              style={{ borderRadius: '100%', objectFit: 'cover', marginRight: '10px' }}
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
          <h3>Agent</h3><br></br>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '5px' }}> 
            <Image 
              src="/green.jpg" 
              alt="Beneficiary" 
              width={50} 
              height={50}  
              style={{ borderRadius: '100%', objectFit: 'cover', marginRight: '10px' }} 
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
