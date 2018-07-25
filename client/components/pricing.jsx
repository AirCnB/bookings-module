import React from 'react';

import styles from '../styles/pricing.css';

const Pricing = ({ nightlyRate, reviewAverage, reviewCount }) => {
  return (
    <div className={styles.container}>
      <div id="nightly-rate">
        ${nightlyRate} per night
      </div>
      <div id="rating">
        ★★★★★ {reviewCount}
      </div>
    </div>
  );
};

module.exports.Pricing = Pricing;
