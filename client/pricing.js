import React from 'react';

const Pricing = ({nightlyRate}) => {
  return (
    <div>
      <div id="nightly-rate">
        ${nightlyRate} per night
      </div>
      <div id="average-rating">
        ★★★★★ 200
      </div>
    </div>
  );
};

module.exports.Pricing = Pricing;
