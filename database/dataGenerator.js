const fs = require('fs');

// create headers
const headers = ['id', 'nightlyRate', 'cleaningFee', 'serviceFee', 'occupancyFee', 'reviewCount', 'reviewAverage', 'reservedDates'];

const getNumInRange = (lower, upper) => Math.floor(Math.random() * (upper - lower)) + lower;

const randomDate = (start, end) => {
  const startTime = start.getTime();
  const endTime = end.getTime();

  const randomTime = startTime + ((endTime - startTime) * Math.random());
  return new Date(randomTime);
};

const getCalendar = () => {
  const calendar = [];
  for (let i = 0; i < 50; i += 1) {
    const newDate = randomDate(new Date(), new Date(2019, 1, 15));
    calendar.push(newDate);
  }
  return calendar.sort((a, b) => a - b);
};

const TSVHeader = () => headers.join('\t');

const TSVRow = (id) => {
  // add id
  let row = `${id}`;

  // add nightlyRate
  row += getNumInRange(10, 20) * 10 + '\t';
  // add cleaningFee
  row += getNumInRange(5, 10) * 10 + '\t';
  // add serviceFee
  row += getNumInRange(10, 20) * 10 + '\t';
  // add occupanyFee
  row += getNumInRange(10, 20) * 10 + '\t';
  // add reviewCount
  row += getNumInRange(10, 100) + '\t';
  // add reviewAverage
  row += getNumInRange(10, 50) / 10 + '\t';
  // add reservedDates
  row += `"${JSON.stringify(getCalendar())}"` + '\n';

  return row;
};

const createTSV = () => {
  // start TSVString with headers
  let TSVString = TSVHeader();

  // create each row
  for (let id = 0; id < 99; id += 1) {
    TSVString += TSVRow(id);
  }

  return TSVString;
};

fs.writeFile('data.tsv', createTSV(), (err) => {
  if (err) {
    console.log(err);
  }
});

// // build the csv file
// let csvString = '';

// // add headers
// csvString += headers.join(',') + '\n';

// // create rows
// let count = 0;
// for (let i = 0; i < 100; i += 1) {
//   let row = '';
//   // add id
//   row += count++ + ',';
//   // add nightlyRate
//   row += getNumInRange(10, 20) * 10 + ',';
//   // add cleaningFee
//   row += getNumInRange(5, 10) * 10 + ',';
//   // add serviceFee
//   row += getNumInRange(10, 20) * 10 + ',';
//   // add occupanyFee
//   row += getNumInRange(10, 20) * 10 + ',';
//   // add reviewCount
//   row += getNumInRange(10, 100) + ',';
//   // add reviewAverage
//   row += getNumInRange(10, 50) / 10 + ',';
//   // add reservedDates
//   row += `"${JSON.stringify(getCalendar())}"` + ',';
//   row += '\n';
//   csvString += row;
// }

// // create csv file
// fs.writeFile('data.csv', csvString, (error) => {
//   if (error) {
//     console.log('fs write file error', error);
//   }
// });

// // create an object for every row in the csv string
// const csvArray = csvString.split('\n');
// for (let row = 1; row < csvArray.length - 1; row += 1) {
//   let csvRow = csvArray[row];
//   let dataArr = csvRow.split(',');
//   let record = {};

//   // keys for everything except the calendar
//   for (let i = 0; i < headers.length - 1; i += 1) {
//     record[headers[i]] = dataArr[i];
//   }

//   // special logic just for the calendar
//   let calendar = csvRow.slice(csvRow.indexOf('['), csvRow.length - 2);
//   let calendarArr = JSON.parse(calendar);
//   record.reservedDates = calendarArr;

//   // clear out the database and add in new data
//   let cal = new db.Booking(record);
//   cal.save((error) => {
//     if (error) {
//       console.log(error);
//     }
//   });
// }
