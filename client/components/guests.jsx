import React from 'react';

import styles from '../styles/guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropDown: false,
    };
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <div id="guests-label">
          <span className={styles.label}>Guests</span>
        </div>
        <button className={styles.button} type="button">1 guest</button>
        <div className={styles.dropdownContent}>
          <div>Adults</div>
          <div>Children</div>
          <div>Infants</div>
        </div>
      </div>
    );
  }
}

const ListItem = () => {
  return (
    <div>
      adsf
    </div>
  );
};

module.exports.Guests = Guests;
