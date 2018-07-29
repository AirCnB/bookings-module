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
      stayDuration: null,
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
      .then(({ data }) => {
        this.setState({
          bookingData: data,
        });
      });
  }

  updateStayDuration(stayDuration) {
    this.setState({ stayDuration });
  }

  renderButton() {
    return (
      <div>
        <button className={styles.requestButton} type="button">
          Request to Book
        </button>
        <div className={styles.buttonNote}>
          You won&apos;t be charged yet
        </div>
      </div>
    );
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
        <Dates reservedDates={reservedDates} />
        <Guests />
        <Summary
          nightlyRate={nightlyRate}
          cleaningFee={cleaningFee}
          occupancyFee={occupancyFee}
          serviceFee={serviceFee}
          stayDuration={stayDuration}
        />
        {this.renderButton()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
