import React from 'react';

import GuestsDropdown from './guestsDropdown.jsx';
import styles from '../styles/guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      guestCount: 1,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.incrementGuestCount = this.incrementGuestCount.bind(this);
    this.decrementGuestCount = this.decrementGuestCount.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  }

  decrementGuestCount() {
    this.setState(prevState => ({ guestCount: prevState.guestCount - 1 }));
  }

  incrementGuestCount() {
    this.setState(prevState => ({ guestCount: prevState.guestCount + 1 }));
  }

  render() {
    return (
      <div className={styles.dropdown}>
        <div id="guests-label">
          <span className={styles.label}>Guests</span>
        </div>
        <button onClick={this.toggleDropdown} className={styles.button} type="button">1 guest</button>
        {this.state.showDropdown
          ? (
            <GuestsDropdown
              increment={this.incrementGuestCount}
              decrement={this.decrementGuestCount}
              count={this.state.guestCount}
            />
          )
          : null}
      </div>
    );
  }
}

module.exports.Guests = Guests;
