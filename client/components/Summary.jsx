import React from 'react';

import styles from '../styles/summary.css';

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
    stayDuration
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

export default Summary;
