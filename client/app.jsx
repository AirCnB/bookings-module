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

  getBookingData(cb) {
    const REG_NUM = /\/(\d*)\//;
    const url = window.location.pathname;
    const route = '/bookings/' + url.match(REG_NUM)[1];

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
