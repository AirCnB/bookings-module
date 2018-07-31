const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const servicePort = 3004;

app.use('/listings/:id', express.static('./public'));

app.get('/api/listings/:id/bookings', (req, res) => {

  // callback function to send data to client
  const sendToClient = (data) => {
    res.status(200).send(data);
  }

  db.getData(req.params.id, sendToClient);
});

app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});
