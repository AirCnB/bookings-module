import React from 'react';

const Dates = () => {
  return (
    <div>
      Dates
      <br />
      <input type="text" name="checkin" placeholder="Check In" />
      →
      <input type="text" name="checkout" placeholder="Check out" />
    </div>
  );
};

module.exports.Dates = Dates;
