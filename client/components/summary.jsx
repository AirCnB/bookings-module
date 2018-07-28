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

const Summary = (props) => {

  const rate = '$149 x 7 nights';
  const total = 149 * 7;
  return (
    <div id="summary" className={styles.wrapper}>
      {renderRow('left', 'right')}
      {renderRow(rate, `$${total.toLocaleString()}`)}
      <div>
        $100 x 10 nights
      </div>
      <div>
        $1,000
      </div>
      <div>
        Service Fee
      </div>
      <div>
        Occupancy taxes and fees
      </div>
      <div>
        Total
      </div>
    </div>
  );
};

module.exports.Summary = Summary;
