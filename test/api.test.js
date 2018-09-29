const request = require('supertest');
const app = require('../server/index.js');

describe('Test GET API', () => {
  test('It should respond to GET /api/listings/0/bookings with a 200 statusCode', () => {
    return request(app).get('/api/listings/1/bookings').then(response => {
      expect(response.statusCode).toBe(200);
    });
  });

  test('It should respond to GET /api/listings/200/bookings with a 404 statusCode', () => {
    return request(app).get('/api/listings/200/bookings').then(response => {
      expect(response.statusCode).toBe(404);
    });
  });
});
