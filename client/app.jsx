import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Pricing from './components/pricing';
import Dates from './components/dates';
import Guests from './components/guests';
import Summary from './components/summary';
import BookingButton from './components/bookingButton';
import styles from './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookingData: {},
      stayDuration: null,
    };
    this.updateStayDuration = this.updateStayDuration.bind(this);
  }

  componentDidMount() {
    this.getBookingData();
  }

  getBookingData() {
    const REG_NUM = /\/(\d*)\//;
    const url = window.location.pathname;
    const bookingsRoute = `/api/listings/${url.match(REG_NUM)[1]}/bookings`;

    axios.get(bookingsRoute)
      .then(({ data }) => {
        this.setState({
          bookingData: data,
        });
      });
  }

  updateStayDuration(stayDuration) {
    this.setState({ stayDuration });
  }

  render() {
    const { bookingData, stayDuration } = this.state;
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
        <Dates
          reservedDates={reservedDates}
          updateStayDuration={this.updateStayDuration}
        />
        <Guests />
        <Summary
          nightlyRate={nightlyRate}
          cleaningFee={cleaningFee}
          occupancyFee={occupancyFee}
          serviceFee={serviceFee}
          stayDuration={stayDuration}
        />
        <BookingButton />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
