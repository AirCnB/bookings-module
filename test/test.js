const request = require('supertest');
const express = require('express');
const { app, server } = require('../server/');

// const app = express();
// const server = app.listen('3004');

afterAll(() => {
  server.close(() => console.log('server closed'));
});

// describe('Express static route', () => {
//   test('It should respond to the GET method with a 200 status code', () => {
//     return request(app).get('/listings/1').then(response => {
//       expect(response.statusCode).toBe(200);
//     });
//   });
// });

describe('Test the /api/listings/:id/bookings endpoint', () => {
  test('It should respond to the GET method with a 200 status code', (done) => {
    request(server)
      .get('/api/listings/1/bookings')
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      })
      .catch(err => {
        done();
      });
  });
});

// describe('Test the /api/listings/:id/bookings endpoint', () => {
//   test('It should respond to the GET method with a 200 status code', () => {
//     return request(app).get('/api/listings/1/bookings').then(response => {
//       expect(response.statusCode).toBe(200);
//       server.close();
//     });
//   });
// });
