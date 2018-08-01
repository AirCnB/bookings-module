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

// read the tsv file
fs.readFile('./data.tsv', (err, data) => {
  if (err) {
    console.log('fs write file error', err);
  }
  // create objects for each row in the csv string
  const tsvArr = data.toString().split('\n');
  const headers = tsvArr.shift().split('\t');

  // clear out the database
  clearDB();

  const records = [];

  for (let row of tsvArr) {
    let rowArr = row.split('\t');
    let obj = {};
    for (let i = 0; i < rowArr.length; i++) {
      obj[headers[i]] = rowArr[i];
    }
    // special logic for the calendar
    obj.reservedDates = JSON.parse(obj.reservedDates);
    const record = new db.Booking(obj);
    records.push(record);
  }

  db.Booking.insertMany(records)
    .then(() => {
      console.log('database seeded');
      db.connection.close(() => {
        console.log('db connection closed');
      });
    });
});


