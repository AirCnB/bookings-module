import React from 'react';

import styles from '../styles/guestsDropdown.css';

const GuestsDropdown = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <div className={styles.category}>Adults</div>
          <div className={styles.category}>
            <button className={styles.button}>-</button>
            <span>1</span>
            <button className={styles.button}>+</button>
          </div>
        </div>
        <div>Children</div>
      </div>
      <div>Infants</div>
      <div>4 guests maximum. Infants don't count toward the number of guests</div>
    </div>
  );
};

export default GuestsDropdown;
