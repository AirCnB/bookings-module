const request = require('request');

// dummy test to setup CircleCI
test('adds 1 + 2  to equal 3', () => {
  expect(1 + 2).toBe(3);
});

// TODO: refactor to use async/await?
// test server GET api
test('responds to GET /api/listings/:id/bookings with a 200 status code', () => {
  request.get('http://localhost:3004/api/listings/1/bookings')
    .on('response', (response) => {
      expect(response.statusCode).toBe(200);
    })
    .on('error', (err) => {
      console.log(err);
      expect(err).toBe(200);
    });
});
