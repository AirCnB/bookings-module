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
    axios.get('/bookings')
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
