import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Pricing from './components/pricing';
import Dates from './components/dates';
import Guests from './components/guests';
import Summary from './components/summary';
import styles from './styles/app.css';

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
    const bookingsRoute = `/listings/${url.match(REG_NUM)[1]}/bookings`;

    axios.get(bookingsRoute)
      .then((response) => {
        this.setState({
          bookingData: response.data,
        });
      });
  }

  render() {
    const { bookingData } = this.state;
    const {
      nightlyRate,
      reviewAverage,
      reviewCount,
      reservedDates,
      occupancyFee,
      cleaningFee,
      serviceFee,
    } = bookingData;
    return (
      <div className={styles.container}>
        <Pricing
          nightlyRate={nightlyRate}
          reviewAverage={reviewAverage}
          reviewCount={reviewCount}
        />
        <Dates reservedDates={reservedDates} />
        <Guests />
        <Summary
          nightlyRate={nightlyRate}
          cleaningFee={cleaningFee}
          occupancyFee={occupancyFee}
          serviceFee={serviceFee}
        />
        <button type="button">
          Request to Book
        </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
