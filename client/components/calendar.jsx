import React from 'react';
import moment from 'moment';

import styles from '../styles/calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
    };
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  renderTitle() {
    return <span>{moment().format('MMMM YYYY')}</span>;
  }

  render() {
    return (
      <div className={styles.wrapper} id="calendar">
        {this.renderTitle()}
      </div>
    );
  }
}

export default Calendar;
