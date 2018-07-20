const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aircnb');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});

// create a schema for the bookings data
let bookingsSchema = mongoose.Schema({
  id: Number,
  minStay: Number,
  nightlyRate: Number,
  cleaningFee: Number,
  serviceFee: Number,
  occupancyFee: Number,
  reviewCount: Number,
  reviewAverage: Number,
  reservedDates: [[Number]],
});

// create a model for the bookings schema
const Booking = mongoose.model('Booking', bookingsSchema);

// function to handle get requests
const getData = (id, callback) => {
  Booking.findOne({id}, (error, data) => {
    if (error) {
      console.log(error);
      return;
    }
    callback(data);
  });
};

module.exports = {
  Booking,
  getData,
};
