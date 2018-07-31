import React from 'react';

import { button, label } from '../styles/bookingButton.css';

const BookingButton = () => (
  <div>
    <button className={button} type="button">
      Request to Book
    </button>
    <div className={label}>
      You won&apos;t be charged yet
    </div>
  </div>
);

export default BookingButton;
