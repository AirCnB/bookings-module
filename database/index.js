const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aircnb');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});

// create a schema for the calendar data
let calendarSchema = mongoose.Schema({
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

// create a model for the calendar schema
let Calendar = mongoose.model('Calendar', calendarSchema);
