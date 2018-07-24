import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Pricing } from './pricing.js';
import { Dates } from './dates.js';
import { Guests } from './guests.js';
import { Summary } from './summary.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: {},
    };
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
        console.log(this);
        this.setState({
          bookingData: response.data
        });
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <Pricing nightlyRate={this.state.bookingData.nightlyRate} bookingData={this.state.bookingData}/>
        <Dates />
        <Guests />
        <Summary />
        <button type="button">Request to Book</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
