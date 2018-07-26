import React from 'react';

import styles from '../styles/pricing.css';

const Pricing = ({ nightlyRate, reviewAverage, reviewCount }) => {
  return (
    <div className={styles.container}>
      <div id="nightly-rate">
        <span className={styles.rate}>${nightlyRate}</span>
        <span className={styles.label}>per night</span>
      </div>
      <div id="rating">
        <span className={styles.stars}>★★★★★</span>
        <span className={styles.label}>{reviewCount}</span>
      </div>
    </div>
  );
};

module.exports.Pricing = Pricing;
