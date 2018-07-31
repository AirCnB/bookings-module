import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/summary.css';

const defaultProps = {
  nightlyRate: 0,
  cleaningFee: 0,
  occupancyFee: 0,
  serviceFee: 0,
  stayDuration: 0,
};

const propTypes = {
  nightlyRate: PropTypes.number,
  cleaningFee: PropTypes.number,
  occupancyFee: PropTypes.number,
  serviceFee: PropTypes.number,
  stayDuration: PropTypes.number,
};

const renderRow = (label, price) => {
  const { grid, right } = styles;

  return (
    <div className={grid}>
      <div>
        {label}
      </div>
      <div className={right}>
        {price}
      </div>
    </div>
  );
};

const renderTotal = (totalPrice) => {
  const { total, right } = styles;

  return (
    <div className={total}>
      <div>
        Total
      </div>
      <div className={right}>
        {totalPrice}
      </div>
    </div>
  );
};

const Summary = (props) => {
  const {
    nightlyRate,
    cleaningFee,
    occupancyFee,
    serviceFee,
    stayDuration,
  } = props;

  const nightlyTotal = nightlyRate * stayDuration;
  const rateText = `$${nightlyRate} x ${stayDuration} nights`;

  const total = nightlyTotal + cleaningFee + occupancyFee + serviceFee;

  return (
    <div id="summary" className={styles.wrapper}>
      {renderRow(rateText, `$${nightlyTotal.toLocaleString()}`)}
      {renderRow('Cleaning Fee', `$${(cleaningFee || 0).toLocaleString()}`)}
      {renderRow('Service Fee', `$${(serviceFee || 0).toLocaleString()}`)}
      {renderRow('Occupancy Fee', `$${(occupancyFee || 0).toLocaleString()}`)}
      {renderTotal(`$${total.toLocaleString()}`)}
    </div>
  );
};

Summary.propTypes = propTypes;
Summary.defaultProps = defaultProps;

export default Summary;
