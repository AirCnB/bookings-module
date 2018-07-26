import React from 'react';

import styles from '../styles/guestsDropdown.css';

const GuestsDropdown = ({ decrementAdult, incrementAdult, adultCount, incrementChild, decrementChild, childrenCount }) => {
  const adults = (
    <div>
      <div id="left" className={styles.category}>
        <div>Adults</div>
      </div>
      <div id="right" className={styles.category}>
        <button type="button" className={styles.button} onClick={decrementAdult}>-</button>
        <span>{adultCount}</span>
        <button type="button" className={styles.button} onClick={incrementAdult}>+</button>
      </div>
    </div>
  );

  const children = (
    <div>
      <div id="left">
        <div>Children</div>
        <div>Ages 2-12</div>
      </div>
      <div id="right">
        <button type="button" className={styles.button} onClick={decrementChild}>-</button>
        <span>{childrenCount}</span>
        <button type="button" className={styles.button} onClick={incrementChild}>+</button>
      </div>
    </div>
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.gridContainer}>
        <div className={styles.left} id="left">
          <div className={styles.title}>Adults</div>
          <div className={styles.label}></div>
        </div>
        <button type="button" className={styles.button} onClick={decrementAdult}>-</button>
        <span>{adultCount}</span>
        <button type="button" className={styles.button} onClick={incrementAdult}>+</button>

        <div className={styles.left} id="left">
          <div className={styles.title}>Children</div>
          <div className={styles.label}>Ages 2-12</div>
        </div>
        <button type="button" className={styles.button} onClick={decrementChild}>-</button>
        <span>{childrenCount}</span>
        <button type="button" className={styles.button} onClick={incrementChild}>+</button>

        <div className={styles.left} id="left">
          <div className={styles.title}>Infants</div>
          <div className={styles.label}>Under 2</div>
        </div>
        <button type="button" className={styles.button} onClick={decrementChild}>-</button>
        <span>{childrenCount}</span>
        <button type="button" className={styles.button} onClick={incrementChild}>+</button>
      </div>
      <div className={styles.label}>4 guests maximum. Infants don't count toward the number of guests</div>
      <div className={styles.textButton}>Close</div>
    </div>
  );
};

export default GuestsDropdown;
