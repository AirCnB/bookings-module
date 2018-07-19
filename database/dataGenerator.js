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

// build the csv file
let csvString = '';

// add headers
csvString += headers.join(',') + '\n';

// create rows
for (let i = 0; i < 10; i++) {
  let row = '';
  // add nightlyRate
  row += getNumInRange(10, 20) * 10 + ',';
  // add cleaningFee
  row += getNumInRange(5, 10) * 10 + ',';
  // add serviceFee
  row += getNumInRange(10, 20) * 10 + ',';
  // add occupanyFee
  row += getNumInRange(10, 20) * 10 + ',';
  // add reviewCount
  row += getNumInRange(10, 100) + ',';
  // add reviewAverage
  row += getNumInRange(10, 50) / 10 + ',';
  // add reservedDates
  row += JSON.stringify(getCalendar()) + ',';
  row += '\n';
  csvString += row;
}

fs.writeFile('data.csv', csvString, (error) => {
  if (error) {
    console.log('fs write file error', error);
  }
  console.log('The file has been saved');
});
