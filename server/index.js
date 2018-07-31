const express = require('express');
const path = require('path');
const db = require('../database/index.js');

const app = express();
const servicePort = 3004;

app.use('/listings/:id', express.static('./public'));

app.get('/api/listings/:id/bookings', (req, res) => {
  db.getData(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(error => res.status(404).send(error));
});

app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});
