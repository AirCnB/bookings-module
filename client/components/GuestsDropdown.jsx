import React from 'react';
import PropTypes from 'prop-types';

import styles from '../styles/guestsDropdown.css';

const propTypes = {
  adultCount: PropTypes.number.isRequired,
  decrementAdult: PropTypes.func.isRequired,
  incrementAdult: PropTypes.func.isRequired,
  childrenCount: PropTypes.number.isRequired,
  decrementChild: PropTypes.func.isRequired,
  incrementChild: PropTypes.func.isRequired,
  infantCount: PropTypes.number.isRequired,
  decrementInfant: PropTypes.func.isRequired,
  incrementInfant: PropTypes.func.isRequired,
  hideDropdown: PropTypes.func.isRequired,
};

const renderRow = (titleText, labelText, count, incrementer, decrementer) => {
  const {
    gridContainer,
    left,
    title,
    label,
    button,
  } = styles;

  return (
    <div className={gridContainer}>
      <div className={left} id="left">
        <div className={title}>
          {titleText}
        </div>
        <div className={label}>
          {labelText}
        </div>
      </div>
      <button type="button" className={button} onClick={decrementer}>
        -
      </button>
      <span>
        {count}
      </span>
      <button type="button" className={button} onClick={incrementer}>
        +
      </button>
    </div>
  );
};

const GuestsDropdown = ({
  adultCount,
  decrementAdult,
  incrementAdult,
  childrenCount,
  decrementChild,
  incrementChild,
  infantCount,
  decrementInfant,
  incrementInfant,
  hideDropdown,
}) => (
  <div className={styles.wrapper}>
    {renderRow('Adults', '', adultCount, incrementAdult, decrementAdult)}
    {renderRow('Children', 'Ages 2-12', childrenCount, incrementChild, decrementChild)}
    {renderRow('Infants', 'Under 2', infantCount, incrementInfant, decrementInfant)}
    <div className={styles.footer}>
      5 guests maximum. Infants don't count toward the number of guests
    </div>
    <div className={styles.textButton} onClick={hideDropdown} role="button">
      Close
    </div>
  </div>
);

GuestsDropdown.propTypes = propTypes;

export default GuestsDropdown;
