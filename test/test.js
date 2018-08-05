import React from 'react';
import { shallow, mount, render } from 'enzyme';

import App from '../client/app';
import Pricing from '../client/components/Pricing';
import Dates from '../client/components/Dates';
import Guests from '../client/components/Guests';
import GuestsDropdown from '../client/components/GuestsDropdown';
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
  const reactApp = shallow(<App />);

  test('It should render all React components without throwing an error', () => {
    expect(reactApp.contains(<Pricing />)).toBe(true);
  });

  test('It should render the Dates component without throwing an error', () => {
    expect(reactApp.contains(<Dates />)).toBe(true);
  });

  test('It should render the Guests component without throwing an error', () => {
    expect(reactApp.contains(<Guests />)).toBe(true);
  });

  test('It should render the Summary component without throwing an error', () => {
    expect(reactApp.contains(<Summary />)).toBe(true);
  });

  test('It should render the BookingButton component without throwing an error', () => {
    expect(reactApp.contains(<BookingButton />)).toBe(true);
  });
});

