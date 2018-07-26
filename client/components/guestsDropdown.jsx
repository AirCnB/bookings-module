import React from 'react';

import styles from '../styles/guestsDropdown.css';

const GuestsDropdown = ({
  decrementAdult,
  incrementAdult,
  adultCount,
  incrementChild,
  decrementChild,
  childrenCount,
  incrementInfant,
  decrementInfant,
  infantCount,
  hideDropdown,
}) => {
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
        <button type="button" className={styles.button} onClick={decrementInfant}>-</button>
        <span>{infantCount}</span>
        <button type="button" className={styles.button} onClick={incrementInfant}>+</button>
      </div>
      <div className={styles.footer}>5 guests maximum. Infants don't count toward the number of guests</div>
      <div className={styles.textButton} onClick={hideDropdown}>Close</div>
    </div>
  );
};

export default GuestsDropdown;
