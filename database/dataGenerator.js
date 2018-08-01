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
  let row = `\n${id}\t`;

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
  row += `${JSON.stringify(getCalendar())}`;

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
  console.log('data written to data.tsv');
});
