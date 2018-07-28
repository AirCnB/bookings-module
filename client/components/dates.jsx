import React from 'react';
import moment from 'moment';

import Calendar from './calendar';
import styles from '../styles/dates.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      setNext: 'checkinString',
      checkinString: '',
      checkoutString: '',
    };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.setDates = this.setDates.bind(this);
  }

  setDates(date) {
    this.setState(prevState => ({ [prevState.setNext]: date.format('L') }));
    this.nextField();
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


  nextField() {
    this.setState(prevState => {
      if (prevState.setNext === 'checkinString') {
        return { setNext: 'checkoutString' };
      } else {
        return { showCalendar: false };
      }
    });
  }

  render() {
    const { showCalendar, checkinString, checkoutString } = this.state;
    const { reservedDates } = this.props;

    const dates = (reservedDates || []).map(date => moment(date));

    return (
      <div className={styles.container}>
        <div id="dates-label">
          <span onClick={this.hideCalendar} className={styles.label}>Dates</span>
        </div>
        <div className={styles.inputContainer}>
          <div id="checkin-box">
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkin"
              placeholder="Check In"
              value={checkinString}
            />
            ➝
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkout"
              placeholder="Check Out"
              value={checkoutString}
            />
          </div>
        </div>
        {showCalendar && (
          <Calendar
            setDates={this.setDates}
            reservedDates={dates}
          />
        )}
      </div>
    );
  }
}

export default Dates;
