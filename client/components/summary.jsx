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

const renderTotal = (left, right) => {
  return (
    <div className={styles.total}>
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
      {renderRow(rate, `$${total.toLocaleString()}`)}
      {renderRow('Service Fee', '$123')}
      {renderRow('Occupancy Fee', '$143')}
      {renderTotal('Total', '$1309')}
    </div>
  );
};

export default Summary;
