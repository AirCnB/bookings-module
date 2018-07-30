import React from 'react';
import moment from 'moment';

import Calendar from './calendar';
import styles from '../styles/dates.css';

class Dates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCalendar: false,
      setNext: 'checkin',
      checkin: '',
      checkout: '',
    };
    this.showCalendar = this.showCalendar.bind(this);
    this.hideCalendar = this.hideCalendar.bind(this);
    this.setDates = this.setDates.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  setDates(date) {
    const { setNext } = this.state;
    const { updateStayDuration } = this.props;

    if (setNext === 'checkout') {
      const duration = this.getDuration(date);
      updateStayDuration(duration);
    }
    this.setState(prevState => ({ [prevState.setNext]: date.format('L') }));
    this.nextField();
  }

  clearDates() {
    this.setState({
      checkin: '',
      checkout: '',
    });
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

  getDuration(checkout = '08/20/2018') {
    const { checkin } = this.state;
    let checkinMoment = moment(checkin, 'MM-DD-YYYY');
    let checkoutMoment = moment(checkout, 'MM-DD-YYYY');
    return moment.duration(checkoutMoment.diff(checkinMoment)).asDays();
  }

  nextField() {
    this.setState(prevState => {
      if (prevState.setNext === 'checkin') {
        return { setNext: 'checkout' };
      }
      return { showCalendar: false };
    });
  }

  handleClick(event) {
    console.log(event.target.name);
  }

  render() {
    const { showCalendar, checkin, checkout, setNext, clearDates } = this.state;
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
              onClick={this.handleClick}
              onFocus={this.showCalendar}
              type="text"
              name="checkin"
              placeholder="Check In"
              value={checkin}
            />
            ➝
            <input
              className={styles.inputBox}
              onFocus={this.showCalendar}
              type="text"
              name="checkout"
              placeholder="Check Out"
              value={checkout}
            />
          </div>
        </div>
        {showCalendar && (
          <Calendar
            setDates={this.setDates}
            clearDates={this.clearDates}
            setNext={setNext}
            reservedDates={dates}
            checkin={checkin}
            checkout={checkout}
          />
        )}
      </div>
    );
  }
}

export default Dates;
