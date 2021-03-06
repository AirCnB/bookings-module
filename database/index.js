const mongoose = require('mongoose');
const { connection } = mongoose;

mongoose.connect('mongodb://localhost/aircnb');

connection.on('error', (error) => {
  console.log('mongo connection error', error);
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
  maxGuests: Number,
  minNights: Number,
  reservedDates: [Date],
});

const Booking = mongoose.model('Booking', bookingsSchema);

const getData = id => Booking.findOne({ id });

module.exports = {
  connection,
  Booking,
  getData,
};
