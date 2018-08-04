import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/app';
import Pricing from '../client/components/Pricing';
import Dates from '../client/components/Dates';
import Guests from '../client/components/Guests';
import Summary from '../client/components/Summary';
import BookingButton from '../client/components/BookingButton';

const request = require('supertest');
const express = require('express');
const { app, server } = require('../server/');

afterAll(() => {
  server.close();
});

describe('Test GET API', () => {
  test('It should respond to GET /api/listings/1/bookings with a 200 statusCode', () => {
    return request(app).get('/api/listings/1/bookings').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});

describe('Enzyme tests on React components', () => {
  test('It should render all React components without throwing an error', () => {
    expect(shallow(<App />).contains(<Pricing />)).toBe(true);
  });

  test('It should render the Dates component without throwing an error', () => {
    expect(shallow(<App />).contains(<Dates />)).toBe(true);
  });

  test('It should render the Guests component without throwing an error', () => {
    expect(shallow(<App />).contains(<Guests />)).toBe(true);
  });

  test('It should render the Summary component without throwing an error', () => {
    expect(shallow(<App />).contains(<Summary />)).toBe(true);
  });

  test('It should render the BookingButton component without throwing an error', () => {
    expect(shallow(<App />).contains(<BookingButton />)).toBe(true);
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
