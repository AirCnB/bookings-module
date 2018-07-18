const express = require('express');

const app = express();
const servicePort = 3004;

app.use(express.static('./public'));

app.listen(servicePort, () => {
  console.log('Listening to port', servicePort);
});
