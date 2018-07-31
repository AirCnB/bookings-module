import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import styles from '../styles/calendar.css';

const propTypes = {
  setDates: PropTypes.func.isRequired,
  clearDates: PropTypes.func.isRequired,
  reservedDates: PropTypes.arrayOf(PropTypes.instanceOf(moment)).isRequired,
  checkin: PropTypes.string.isRequired,
  checkout: PropTypes.string.isRequired,
};

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      month: moment(),
    };

    this.setToNextMonth = this.setToNextMonth.bind(this);
    this.setToPrevMonth = this.setToPrevMonth.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setToPrevMonth() {
    this.setState(prevState => ({ month: prevState.month.add(-1, 'months') }));
  }

  setToNextMonth() {
    this.setState(prevState => ({ month: prevState.month.add(1, 'months') }));
  }

  handleClick(event) {
    const { setDates } = this.props;
    const { month } = this.state;

    const clickedDate = month.date(event.target.innerHTML);
    setDates(clickedDate);
  }

  renderTitle() {
    const { month } = this.state;
    const { titleGrid, title, button } = styles;

    return (
      <div className={titleGrid}>
        <button className={button} onClick={this.setToPrevMonth} type="button">
          ←
        </button>
        <span className={title}>
          {month.format('MMMM YYYY')}
        </span>
        <button className={button} onClick={this.setToNextMonth} type="button">
          →
        </button>
      </div>
    );
  }

  renderHeader() {
    const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fi', 'Sa'];
    const { header } = styles;

    return (
      <div className={header}>
        {days.map((day, i) => (<span key={i}>{day}</span>))}
      </div>
    );
  }

  renderButton() {
    const { clearDates } = this.props;
    const { textButton } = styles;

    return (
      <div onClick={clearDates} className={textButton} role="button">
        Clear Dates
      </div>
    );
  }

  renderCalendar() {
    const { month } = this.state;
    const { reservedDates, checkin, checkout } = this.props;
    const {
      cell,
      selectedCell,
      invalidCell,
      emptyCell,
      table,
    } = styles;

    const DAYS_IN_WEEK = 7;
    const firstDayIndex = month.startOf('month').day();
    const daysInMonth = month.daysInMonth();
    const maxWeek = Math.ceil((firstDayIndex + daysInMonth) / 7);

    const calendar = [];
    let day = 1 - firstDayIndex;
    for (let row = 0; row < maxWeek; row += 1) {
      const week = [];
      for (let col = 0; col < DAYS_IN_WEEK; col += 1) {
        week.push((day >= 1 && day <= daysInMonth) ? day : '');
        day += 1;
      }
      calendar.push(week);
    }

    this.invalids = {};
    for (let i = 0; i < reservedDates.length; i += 1) {
      const date = reservedDates[i];
      if (date.month() === month.month()) {
        this.invalids[date.date()] = true;
      }
    }

    const getCellStyle = (date) => {
      const checkinMoment = moment(checkin, 'MM-DD-YYYY');
      const checkoutMoment = moment(checkout, 'MM-DD-YYYY');
      if (date === '') {
        return emptyCell;
      }
      if (
        date in this.invalids
        || month.date(date) < moment()
        || month.date(date) < checkinMoment
      ) {
        return invalidCell;
      }
      if (
        (date === checkinMoment.date()
          && month.month() === checkinMoment.month())
        || (date === checkoutMoment.date()
          && month.month() === checkoutMoment.month())
      ) {
        return selectedCell;
      }
      return cell;
    };

    return (
      <table className={table}>
        <tbody>
          {calendar.map((week, i) => (
            <tr key={i}>
              {week.map((date, j) => (
                <td className={getCellStyle(date)} onClick={this.handleClick} key={`${i}${j}`}>
                  {date}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div className={styles.wrapper} id="calendar">
        {this.renderTitle()}
        {this.renderHeader()}
        {this.renderCalendar()}
        {this.renderButton()}
      </div>
    );
  }
}

Calendar.propTypes = propTypes;

export default Calendar;
