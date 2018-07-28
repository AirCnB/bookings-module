import React from 'react';
import moment from 'moment';

import styles from '../styles/calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: moment(),
    };
    this.nextMonth = this.nextMonth.bind(this);
    this.prevMonth = this.prevMonth.bind(this);
    this.days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fi', 'Sa'];
  }

  prevMonth() {
    this.setState(prevState => ({ month: prevState.month.add(-1, 'months') }));
  }

  nextMonth() {
    this.setState(prevState => ({ month: prevState.month.add(1, 'months') }));
  }

  renderTitle() {
    const { month } = this.state;
    return (
      <div className={styles.titleGrid}>
        <button className={styles.button} onClick={this.prevMonth} type="button">
          ←
        </button>
        <span className={styles.title}>
          {month.format('MMMM YYYY')}
        </span>
        <button className={styles.button} onClick={this.nextMonth} type="button">
          →
        </button>
      </div>
    );
  }

  handleClick(event) {
    console.log(event.target.innerHTML);
  }

  renderHeader() {
    return (
      <div className={styles.header}>
        {this.days.map((day, i) => (<span key={i}>{day}</span>))}
      </div>
    );
  }

  renderCalendar() {
    const { month } = this.state;
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
    for (let date of this.props.reservedDates) {
      if (date.month() === this.state.month.month()) {
        this.invalids[date.date()] = true;
      }
    }

    const getCellStyle = (date) => {
      if (date === '') {
        return styles.emptyCell;
      }
      if (date in this.invalids) {
        return styles.invalidCell;
      }
      return styles.cell;
    }

    return (
      <table className={styles.table}>
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
      </div>
    );
  }
}

export default Calendar;
