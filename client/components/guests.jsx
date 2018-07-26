import React from 'react';

import GuestsDropdown from './guestsDropdown.jsx';
import styles from '../styles/guests.css';

class Guests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDropdown: false,
      adultCount: 1,
      childrenCount: 0,
      guestCount: 1,
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.incrementChildrenCount = this.incrementChildrenCount.bind(this);
    this.decrementChildrenCount = this.decrementChildrenCount.bind(this);
    this.decrementAdultCount = this.decrementAdultCount.bind(this);
    this.incrementAdultCount = this.incrementAdultCount.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  }

  decrementChildrenCount() {
    this.setState(prevState => ({ childrenCount: prevState.childrenCount - 1 }));
  }

  incrementChildrenCount() {
    this.setState(prevState => ({ childrenCount: prevState.childrenCount + 1 }));
  }

  decrementAdultCount() {
    this.setState(prevState => ({ adultCount: prevState.adultCount - 1 }));
  }

  incrementAdultCount() {
    this.setState(prevState => ({ adultCount: prevState.adultCount + 1 }));
  }

  render() {
    const { adultCount, childrenCount, guestCount, showDropdown } = this.state;
    return (
      <div className={styles.dropdown}>
        <div id="guests-label">
          <span className={styles.label}>Guests</span>
        </div>
        <button className={styles.button} onClick={this.toggleDropdown} type="button">
          {adultCount + childrenCount} guest
        </button>
        {showDropdown
          ? (
            <GuestsDropdown
              incrementAdult={this.incrementAdultCount}
              decrementAdult={this.decrementAdultCount}
              incrementChild={this.incrementChildrenCount}
              decrementChild={this.decrementChildrenCount}
              adultCount={adultCount}
              childrenCount={childrenCount}
            />
          )
          : null}
      </div>
    );
  }
}

module.exports.Guests = Guests;
