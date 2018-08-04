import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Pricing from './components/Pricing';
import Dates from './components/Dates';
import Guests from './components/Guests';
import Summary from './components/Summary';
import BookingButton from './components/BookingButton';
import { container } from './styles/app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookingData: {},
      stayDuration: 0,
    };

    this.updateStayDuration = this.updateStayDuration.bind(this);
  }

  componentDidMount() {
    this.getBookingData();
  }

  getBookingData() {
    const url = window.location.pathname;
    const REGEX_CAPTURE_NUM = /\/(\d*)\//;
    const listingId = (url.match(REGEX_CAPTURE_NUM) || [0, 0])[1];
    const apiEndpoint = `/api/listings/${listingId}/bookings`;

    axios.get(apiEndpoint)
      .then(({ data }) => {
        this.setState({
          bookingData: data,
        });
      })
      .catch(error => console.error(error));
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
      <div className={container}>
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

export default App;
