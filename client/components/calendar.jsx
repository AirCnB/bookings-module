import React from 'react';

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
      <div id="calendar">
        calendar
      </div>
    );
  }
}

export default Calendar;
