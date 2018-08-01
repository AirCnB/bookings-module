const request = require('supertest');
const express = require('express');
const { app, server } = require('../server/');

test('adds 1 + 2', () => {
  expect(1 + 2).toBe(3);
});

// afterEach((done) => {
//   server.close(done);
//   console.log('after done');
// });

describe('Express static route', () => {
  test('It should respond to the GET method with a 200 status code', () => {
    return request(app).get('/listings/1').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

// describe('Test the /api/listings/:id/bookings endpoint', () => {
//   test('It should respond to the GET method with a 200 status code', (done) => {
//     request(app)
//       .get('/api/listings/1/bookings')
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       });
//   });
// });

// describe('Test the /api/listings/:id/bookings endpoint', () => {
//   test('It should respond to the GET method with a 200 status code', () => {
//     return request(app).get('/api/listings/1/bookings').then(response => {
//       expect(response.statusCode).toBe(200);
//       server.close();
//     });
//   });
// });
