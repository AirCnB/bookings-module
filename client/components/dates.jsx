import React from 'react';
import moment from 'moment';

import Calendar from './calendar';
import styles from '../styles/dates.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      setNext: 'checkinDate',
      checkinDate: '',
      checkoutDate: '',
    };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.setDates = this.setDates.bind(this);
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

  setDates(date) {
    console.log(this.state.setNext, date.format('L'));
    this.setState({
      [this.state.setNext]: date,
    });
    this.toggleField();
  }

  toggleField() {
    const setNext = (this.state.setNext === 'checkinDate') ? 'checkoutDate' : 'checkinDate';
    this.setState({
      setNext,
    });
  }

  render() {
    const { showCalendar } = this.state;
    const { reservedDates } = this.props;

    const dates = (reservedDates || []).map(date => moment(date));

    let checkinDate;
    if (this.state.checkinDate) {
      checkinDate = this.state.checkinDate.format('L');
    } else {
      checkinDate = 'Check In';
    }
    console.log(checkinDate);

    let checkoutDate;
    if (this.state.checkoutDate) {
      checkoutDate = this.state.checkoutDate.format('L');
    } else {
      checkoutDate = 'Check Out';
    }
    console.log(checkoutDate);

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
              value={checkinDate}
            />
            ➝
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkout"
              placeholder="Check Out"
              value={checkoutDate}
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
