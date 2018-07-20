const express = require('express');
const path = require('path');

const app = express();
const servicePort = 3004;

app.use('/aircnb/:id', express.static('./public'));

app.get('/bookings/:id', (req, res) => {
  console.log(req.params);
  res.status(200).end();
});

app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});
