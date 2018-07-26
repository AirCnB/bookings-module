import React from 'react';

import styles from '../styles/guests.css';

const Guests = () => {
  return (
    <div>
      <div id="guests-label">
        <span className={styles.label}>Guests</span>
      </div>
      <button className={styles.button} type="button">1 guest</button>
    </div>
  );
};

module.exports.Guests = Guests;
