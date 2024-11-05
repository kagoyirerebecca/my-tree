import React from 'react';
import styles from './globals.css'; // Importing CSS module for styling

const EcoForest = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>ECO FOREST</div>
        <div className={styles.icons}>
          <span>🌱</span>
          <span>👥</span>
        </div>
      </header>
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>Organization: Kigali FAAM</h2>
          <p>Contributor: Kristian GASARO</p>
        </section>
        
        <section className={styles.section}>
          <h3>Beneficiary</h3>
          <p><strong>Name:</strong> USANEZA Nadine</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Address:</strong> Southern Province, Muhanga District, Munazi Sector, Mukura Village</p>
        </section>

        <section className={styles.section}>
          <h3>Green Agent</h3>
          <p><strong>Name:</strong> USANEZA Nadine</p>
          <p><strong>Gender:</strong> Male</p>
          <p><strong>Address:</strong> Southern Province, Muhanga District, Munazi Sector, Mukura Village</p>
        </section>

        <section className={styles.about}>
          <h3>About Specie</h3>
          <p>
            Before we introduced agroforest trees to our farms, the heavy rains would wash away the fertile soil,
            leaving us with poor harvests and not enough grass for our cows to produce milk for our children. 
            The land was struggling, and so were we.
          </p>
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
