import React from 'react';

import Calendar from './calendar.jsx';
import styles from '../styles/dates.css';

const Dates = () => {
  return (
    <div className={styles.container}>
      <div id="dates-label">
        <span className={styles.label}>Dates</span>
      </div>
      <div className={styles.inputContainer}>
        <div id="checkin-box">
          <input
            className={styles.inputBox}
            type="text"
            name="checkin"
            placeholder="Check In"
          />
          ➝
          <input
            className={styles.inputBox}
            type="text"
            name="checkout"
            placeholder="Check Out"
          />
        </div>
      </div>
      <Calendar />
    </div>
  );
};

module.exports.Dates = Dates;
