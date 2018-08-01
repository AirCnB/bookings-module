const fs = require('fs');
const db = require('./index.js');

const clearDB = () => {
  db.Booking.remove({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('database cleared');
  });
};

const generateRecords = (tsvArr) => {
  const headers = tsvArr.shift().split('\t');
  const records = [];

  for (let i = 0; i < tsvArr.length; i += 1) {
    const obj = {};

    const rowArr = tsvArr[i].split('\t');
    for (let j = 0; j < rowArr.length; j += 1) {
      obj[headers[j]] = rowArr[j];
    }

    // special logic for the calendar
    obj.reservedDates = JSON.parse(obj.reservedDates);
    const record = new db.Booking(obj);
    records.push(record);
  }

  return records;
};

// read the tsv file
fs.readFile('./data.tsv', (err, data) => {
  if (err) {
    console.log('fs write file error', err);
  }

  clearDB();

  const records = generateRecords(data.toString().split('\n'));
  db.Booking.insertMany(records)
    .then(() => {
      console.log('database seeded');
      db.connection.close(() => {
        console.log('db connection closed');
      });
    });
});
