import request from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import authMiddleware from '../middleware/auth';
import {describe, expect, it} from "@jest/globals"; // Update this path accordingly

const app = express();
app.use(authMiddleware);

app.get('/protected-route', (req, res) => {
  res.status(200).send('Protected route accessed successfully.');
});

describe('Auth Middleware Integration Test', () => {
  it('should allow access for a valid user', async () => {
    const validToken = jwt.sign({ userId: 'validUserId' }, config.JwtSecret);
    const response = await request(app)
      .get('/protected-route')
      .set('Authorization', `Bearer ${validToken}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Protected route accessed successfully.');
  });

  it('should deny access for an invalid token', async () => {
    const invalidToken = 'invalid-token';
    const response = await request(app)
      .get('/protected-route')
      .set('Authorization', `Bearer ${invalidToken}`);

    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid token.');
  });

  it('should deny access for missing token', async () => {
    const response = await request(app).get('/protected-route');

    expect(response.status).toBe(401);
    expect(response.text).toBe('Access denied. No token provided.');
  });
});
