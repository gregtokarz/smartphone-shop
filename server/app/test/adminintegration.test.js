import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import adminMiddleware from '../middleware/admin';
import {describe, expect, it} from "@jest/globals";

const app = express();
app.use(adminMiddleware);

app.get('/admin-test', (req, res) => {
  res.status(200).send('Admin route accessed successfully.');
});

describe('Admin Middleware Integration Test', () => {
  it('should allow access for valid admin user', async () => {
    const validToken = jwt.sign({ isAdmin: true }, config.JwtSecret);
    const response = await request(app)
      .get('/admin-test')
      .set('Authorization', `Bearer ${validToken}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Admin route accessed successfully.');
  });

  it('should deny access for non-admin user', async () => {
    const invalidToken = jwt.sign({ isAdmin: false }, config.JwtSecret);
    const response = await request(app)
      .get('/admin-test')
      .set('Authorization', `Bearer ${invalidToken}`);

    expect(response.status).toBe(403);
    expect(response.text).toBe('Access denied.');
  });

  it('should deny access for invalid token', async () => {
    const invalidToken = 'invalid-token';
    const response = await request(app)
      .get('/admin-test')
      .set('Authorization', `Bearer ${invalidToken}`);

    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid token.');
  });

});
