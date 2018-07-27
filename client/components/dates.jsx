import React from 'react';

import Calendar from './calendar';
import styles from '../styles/dates.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
    };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
  }

  showCalendar() {
    this.setState({
      showCalendar: true,
    });
  }

  hideCalendar() {
    this.setState({
      showCalendar: false,
    });
  }


  render() {
    const { showCalendar } = this.state;
    return (
      <div className={styles.container}>
        <div id="dates-label">
          <span className={styles.label}>Dates</span>
        </div>
        <div className={styles.inputContainer}>
          <div id="checkin-box">
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkin"
              placeholder="Check In"
            />
            ➝
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkout"
              placeholder="Check Out"
            />
          </div>
        </div>
        {showCalendar && <Calendar />}
      </div>
    );
  }
}

module.exports.Dates = Dates;
