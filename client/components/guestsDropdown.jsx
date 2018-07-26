import React from 'react';

import styles from '../styles/guestsDropdown.css';

const GuestsDropdown = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <div className={styles.category}>Adults</div>
          <div className={styles.category}>
            <button className={styles.button} onClick={props.decrement}>-</button>
            <span>{props.count}</span>
            <button className={styles.button} onClick={props.increment}>+</button>
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
