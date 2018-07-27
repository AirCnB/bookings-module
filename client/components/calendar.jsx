import React from 'react';

import styles from '../styles/calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
    };
    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  }

  render() {
    return (
      <div className={styles.wrapper} id="calendar">
        <tbody className={styles.table}>
          <tr className={styles.table}>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </tbody>
      </div>
    );
  }
}

export default Calendar;
