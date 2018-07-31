import React from 'react';

import styles from '../styles/bookingButton.css';

const BookingButton = () => (
  <div>
    <button className={styles.button} type="button">
      Request to Book
    </button>
    <div className={styles.label}>
      You won&apos;t be charged yet
    </div>
  </div>
);

export default BookingButton;
