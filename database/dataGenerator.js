const fs = require('fs');

// create headers
const headers = ['nightlyRate', 'cleaningFee', 'serviceFee', 'occupancyFee', 'reviewCount', 'reviewAverage', 'reservedDates'];

// helper functions for generating random data
const getNumInRange = (lower, upper) => {
  return ~~(Math.random() * (upper - lower)) + lower;
};

// TODO: use more realistic data (add random ranges of dates)
const getCalendar = () => {
  const calendar = [];
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  for (let month of months) {
    const days = [];
    for (let i = 1; i <= month; i += 1) {
      if (getNumInRange(1, 10) < 3) {
        days.push(i);
      }
    }
    calendar.push(days);
  }
  return calendar;
};

fs.writeFileSync('data.csv', 'hello, this is a test \n second line', (error) => {
  if (error) {
    console.log('fs write file error', error);
  }
  console.log('The file has been saved');
});
