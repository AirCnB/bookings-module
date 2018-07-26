import React from 'react';

import styles from '../styles/guestsDropdown.css';

const GuestsDropdown = ({ decrement, increment, count }) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <div className={styles.category}>Adults</div>
          <div className={styles.category}>
            <button type="button" className={styles.button} onClick={decrement}>-</button>
            <span>{count}</span>
            <button type="button" className={styles.button} onClick={increment}>+</button>
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
