const express = require('express');

const app = express();
const servicePort = 3004;

app.use('/', express.static('./public'));

app.get('/bookings/:id', (req, res) => {
  console.log(req.params);
  res.status(200).end();
});

app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});
