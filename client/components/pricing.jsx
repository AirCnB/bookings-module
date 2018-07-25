import React from 'react';

const Pricing = ({ nightlyRate, reviewAverage, reviewCount }) => {
  return (
    <div>
      <div id="nightly-rate">
        ${nightlyRate} per night
      </div>
      <div id="rating">
        ★★★★★ {reviewCount}
      </div>
    </div>
  );
};

module.exports.Pricing = Pricing;
