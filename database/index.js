const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/aircnb');
const db = mongoose.connection;

db.on('error', () => {
  console.log('mongo connection error');
});
