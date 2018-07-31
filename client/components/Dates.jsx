import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Calendar from './Calendar';
import styles from '../styles/dates.css';

const defaultProps = {
  reservedDates: [],
};

const propTypes = {
  reservedDates: PropTypes.arrayOf(PropTypes.string),
  updateStayDuration: PropTypes.func.isRequired,
};

class Dates extends Component {
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

  getDuration(checkout = '08/20/2018') {
    const { checkin } = this.state;

    const checkinMoment = moment(checkin, 'MM-DD-YYYY');
    const checkoutMoment = moment(checkout, 'MM-DD-YYYY');
    return moment.duration(checkoutMoment.diff(checkinMoment)).asDays();
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

  clearDates() {
    this.setState({
      checkin: '',
      checkout: '',
    });
  }

  nextField() {
    this.setState((prevState) => {
      if (prevState.setNext === 'checkin') {
        return { setNext: 'checkout' };
      }
      return { showCalendar: false };
    });
  }

  render() {
    const {
      showCalendar,
      checkin,
      checkout,
    } = this.state;
    const { reservedDates } = this.props;

    const dates = (reservedDates || []).map(date => moment(date));

    return (
      <div className={styles.container}>
        <div id="dates-label">
          <span onClick={this.hideCalendar} className={styles.label} role="button">
            Dates
          </span>
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
            reservedDates={dates}
            checkin={checkin}
            checkout={checkout}
          />
        )}
      </div>
    );
  }
}

Dates.propTypes = propTypes;
Dates.defaultProps = defaultProps;

export default Dates;
