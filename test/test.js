import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/app';

const request = require('supertest');
const express = require('express');
const { app, server } = require('../server/');

// const app = express();
// const server = app.listen('3004');

afterAll(() => {
  server.close();
});

describe('dummy test', () => {
  test('It should do simple math', () => {
    expect(1 + 2).toBe(3);
  });
});

describe('Test GET API', () => {
  test('It should respond to GET /api/listings/1/bookings with a 200 statusCode', () => {
    return request(app).get('/api/listings/1/bookings').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Enzyme tests on React components', () => {
  test('It should render wtihout throwing an error', () => {
    expect(shallow(<App />).contains(<div></div>)).toBe(true);
  });
});

// describe('Test the /api/listings/:id/bookings endpoint', () => {
//   test('It should respond to the GET method with a 200 status code', (done) => {
//     request(server)
//       .get('/api/listings/1/bookings')
//       .then(response => {
//         expect(response.statusCode).toBe(200);
//         done();
//       })
//       .catch(err => {
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
