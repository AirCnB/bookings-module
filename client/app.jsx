import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getBookingData();
  }

  static getBookingData() {
    const REG_NUM = /\/(\d*)\//;
    const url = window.location.pathname;
    const route = `/listings/${url.match(REG_NUM)[1]}/bookings`;

    axios.get(route)
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        Hello from React + webpack
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
