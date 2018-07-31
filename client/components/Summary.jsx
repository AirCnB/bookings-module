import React from 'react';

import styles from '../styles/summary.css';

const renderRow = (left, right) => {
  return (
    <div className={styles.grid}>
      <div>
        {left}
      </div>
      <div className={styles.right}>
        {right}
      </div>
    </div>
  );
}

const renderTotal = (total) => {
  return (
    <div className={styles.total}>
      <div>
        Total
      </div>
      <div className={styles.right}>
        {total}
      </div>
    </div>
  );
}

const Summary = (props) => {
  const { nightlyRate, cleaningFee, occupancyFee, serviceFee, stayDuration } = props;

  const nightlyTotal = nightlyRate * stayDuration;
  const rateText = `$${nightlyRate} x ${stayDuration} nights`

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
