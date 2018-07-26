import React from 'react';

import GuestsDropdown from './guestsDropdown.jsx';
import styles from '../styles/guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <div id="guests-label">
          <span className={styles.label}>Guests</span>
        </div>
        <button onClick={this.toggleDropdown} className={styles.button} type="button">1 guest</button>
        {this.state.showDropdown ? <GuestsDropdown /> : null}
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
