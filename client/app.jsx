import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Pricing } from './pricing.js';
import { Dates } from './dates.js';
import { Guests } from './guests.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getBookingData();
  }

  getBookingData() {
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
        <Pricing />
        <Dates />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
