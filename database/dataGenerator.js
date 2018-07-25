const fs = require('fs');
const db = require('./index.js');

// create headers
const headers = ['id', 'nightlyRate', 'cleaningFee', 'serviceFee', 'occupancyFee', 'reviewCount', 'reviewAverage', 'reservedDates'];

// helper function for generating random data
const getNumInRange = (lower, upper) => {
  return Math.floor(Math.random() * (upper - lower)) + lower;
};

const randomDate = (start, end) => {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const randomTime = startTime + ((endTime - startTime) * Math.random());
  return new Date(randomTime);
};

const getCalendar = () => {
  const calendar = [];
  for (let i = 0; i < 50; i++) {
    let newDate = randomDate(new Date(), new Date(2019, 1, 15))
    calendar.push(newDate);
  }
  return calendar.sort((a, b) => a - b);
};

// build the csv file
let csvString = '';

// add headers
csvString += headers.join(',') + '\n';

// create rows
let count = 0;
for (let i = 0; i < 100; i++) {
  let row = '';
  // add id
  row += count++ + ',';
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
  row += `"${JSON.stringify(getCalendar())}"` + ',';
  row += '\n';
  csvString += row;
}

// create csv file
fs.writeFile('data.csv', csvString, (error) => {
  if (error) {
    console.log('fs write file error', error);
  }
});

// create an object for every row in the csv string
const csvArray = csvString.split('\n');
for (let row = 1; row < csvArray.length - 1; row++) {
  let csvRow = csvArray[row];
  let dataArr = csvRow.split(',');
  let record = {};

  // keys for everything except the calendar
  for (let i = 0; i < headers.length - 1; i++) {
    record[headers[i]] = dataArr[i];
  }

  // special logic just for the calendar
  let calendar = csvRow.slice(csvRow.indexOf('['), csvRow.length - 2);
  let calendarArr = JSON.parse(calendar);
  record.reservedDates = calendarArr;

  // clear out the database and add in new data
  let cal = new db.Booking(record);
  cal.save((error) => {
    if (error) {
      console.log(error);
    }
  });
}
