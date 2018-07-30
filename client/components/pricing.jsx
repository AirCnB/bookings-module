import React from 'react';

import styles from '../styles/pricing.css';

const roundToHalf = (num) => {
  return Math.round(num * 2) / 2;
};

const renderStars = (reviewAverage = 0) => {
  let stars = [];
  const TOTAL_STARS = 5;
  const halfRound = roundToHalf(reviewAverage);

  const filledCount = Math.floor(halfRound);
  const hasHalf = halfRound % 1 !== 0;
  const emptyCount = TOTAL_STARS - filledCount - hasHalf;

  stars = stars.concat(Array(filledCount || 0).fill('star_full.svg'))
    .concat(Array(+hasHalf || 0).fill('star_half.svg'))
    .concat(Array(emptyCount || 0).fill('star_empty.svg'));

  return stars.map(fileName => (
    <img className={styles.stars} src={`./media/${fileName}`} />
  ));
};

const Pricing = ({ nightlyRate, reviewAverage, reviewCount }) => {
  return (
    <div className={styles.container}>
      <div id="nightly-rate">
        <span className={styles.rate}>${nightlyRate}</span>
        <span className={styles.label}>per night</span>
      </div>
      <div id="rating">
        <span className={styles.stars}>
          {renderStars(reviewAverage)}
        </span>
        <span className={styles.label}>{reviewCount}</span>
      </div>
    </div>
  );
};

export default Pricing;
