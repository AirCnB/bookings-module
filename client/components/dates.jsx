import React from 'react';

import styles from '../styles/dates.css'

const Dates = () => {
  return (
    <div className={styles.container}>
      Dates
      <br />
      <input type="text" name="checkin" placeholder="Check In" />
      →
      <input type="text" name="checkout" placeholder="Check out" />
    </div>
  );
};

module.exports.Dates = Dates;
