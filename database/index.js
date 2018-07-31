const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aircnb');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});

const bookingsSchema = mongoose.Schema({
  id: Number,
  minStay: Number,
  nightlyRate: Number,
  cleaningFee: Number,
  serviceFee: Number,
  occupancyFee: Number,
  reviewCount: Number,
  reviewAverage: Number,
  reservedDates: [Date],
});

const Booking = mongoose.model('Booking', bookingsSchema);

const getData = (id, callback) => {
  Booking.findOne({ id }, (error, data) => {
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
