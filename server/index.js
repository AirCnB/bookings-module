/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();

app.use('/listings/:id', express.static('./public'));

app.get('/api/listings/:id/bookings', (req, res) => {
  db.getData(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

module.exports = app;
