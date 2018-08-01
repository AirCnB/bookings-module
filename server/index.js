/* eslint-disable no-console */
const express = require('express');
const db = require('../database/index.js');

const app = express();
const servicePort = 3004;

app.use('/listings/:id', express.static('./public'));

app.get('/api/listings/:id/bookings', (req, res) => {
  db.getData(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

const server = app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});

module.exports.app = app;
module.exports.server = server;
