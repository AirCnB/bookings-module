import React, { Component } from 'react';

import GuestsDropdown from './GuestsDropdown';
import styles from '../styles/guests.css';

class Guests extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDropdown: false,
      adultCount: 1,
      childrenCount: 0,
      infantCount: 0,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
    this.decrementAdultCount = this.decrementAdultCount.bind(this);
    this.incrementAdultCount = this.incrementAdultCount.bind(this);
    this.decrementChildrenCount = this.decrementChildrenCount.bind(this);
    this.incrementChildrenCount = this.incrementChildrenCount.bind(this);
    this.decrementInfantCount = this.decrementInfantCount.bind(this);
    this.incrementInfantCount = this.incrementInfantCount.bind(this);
  }

  toggleDropdown() {
    this.setState(prevState => ({ showDropdown: !prevState.showDropdown }));
  }

  hideDropdown() {
    this.setState({
      showDropdown: false,
    });
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

  decrementInfantCount() {
    this.setState(prevState => ({ infantCount: prevState.infantCount - 1 }));
  }

  incrementInfantCount() {
    this.setState(prevState => ({ infantCount: prevState.infantCount + 1 }));
  }

  render() {
    const {
      adultCount,
      childrenCount,
      infantCount,
      showDropdown,
    } = this.state;
    const { button, label, dropdown } = styles;

    return (
      <div className={dropdown}>
        <div id="guests-label">
          <span className={label}>
            Guests
          </span>
        </div>
        <button className={button} onClick={this.toggleDropdown} type="button">
          {`${adultCount + childrenCount} guest`}
        </button>
        {showDropdown && (
          <GuestsDropdown
            incrementAdult={this.incrementAdultCount}
            decrementAdult={this.decrementAdultCount}
            incrementChild={this.incrementChildrenCount}
            decrementChild={this.decrementChildrenCount}
            incrementInfant={this.incrementInfantCount}
            decrementInfant={this.decrementInfantCount}
            adultCount={adultCount}
            childrenCount={childrenCount}
            infantCount={infantCount}
            hideDropdown={this.hideDropdown}
          />
        )}
      </div>
    );
  }
}

export default Guests;
