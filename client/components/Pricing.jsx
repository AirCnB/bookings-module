import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/pricing.css';

const {
  stars,
  container,
  rate,
  label,
} = styles;

const propTypes = {
  nightlyRate: PropTypes.number,
  reviewAverage: PropTypes.number,
  reviewCount: PropTypes.number,
};

const defaultProps = {
  nightlyRate: 0,
  reviewAverage: 0,
  reviewCount: 0,
};

const roundToHalf = num => Math.round(num * 2) / 2;

const renderStars = (reviewAverage = 0) => {
  const TOTAL_STARS = 5;
  const halfRound = roundToHalf(reviewAverage);

  const filledCount = Math.floor(halfRound);
  const hasHalf = halfRound % 1 !== 0;
  const emptyCount = TOTAL_STARS - filledCount - hasHalf;

  const starFiles = Array(filledCount).fill('star_full.svg')
    .concat(Array(+hasHalf).fill('star_half.svg'))
    .concat(Array(emptyCount).fill('star_empty.svg'));

  return starFiles.map((fileName, i) => (
    <img
      className={stars}
      alt={`Average rating is ${halfRound}`}
      src={`./media/${fileName}`}
      key={i}
    />
  ));
};

const Pricing = ({ nightlyRate, reviewAverage, reviewCount }) => (
  <div className={container}>
    <div id="nightly-rate">
      <span className={rate}>
        {`$${nightlyRate}`}
      </span>
      <span className={label}>
        per night
      </span>
    </div>
    <div id="rating">
      <span>
        {renderStars(reviewAverage)}
      </span>
      <span className={label}>
        {reviewCount}
      </span>
    </div>
  </div>
);

Pricing.defaultProps = defaultProps;
Pricing.propTypes = propTypes;

export default Pricing;
