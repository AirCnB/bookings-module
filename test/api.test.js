const request = require('supertest');
const express = require('express');
const { app, server } = require('../server/');

afterAll(() => {
  server.close();
});

describe('Test GET API', () => {
  test('It should respond to GET /api/listings/0/bookings with a 200 statusCode', () => {
    return request(app).get('/api/listings/1/bookings').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });
});
