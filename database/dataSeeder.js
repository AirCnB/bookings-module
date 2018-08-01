const fs = require('fs');
const db = require('./index.js');

// read the tsv file
fs.readFile('./data.tsv', (err, data) => {
  if (err) {
    console.log('fs write file error', err);
  }
  // clear out the database and add in the new data
});


