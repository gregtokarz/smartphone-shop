import supertest from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import authMiddleware from '../middleware/auth';
import {beforeEach, describe, expect, it} from "@jest/globals";

describe('Auth Middleware Tests', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(authMiddleware);
    app.get('/test-protected', (req, res) => res.status(200).send('Protected route'));
  });

  it('Auth powinien pozwolic na dostęp z poprawnym tokenem', async () => {
    const token = jwt.sign({ userId: '123' }, config.JwtSecret);
    const response = await supertest(app)
      .get('/test-protected')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Protected route');
  });

  it('Auth powinien odrzucić dostęp bez tokena', async () => {
    const response = await supertest(app)
      .get('/test-protected');

    expect(response.status).toBe(401);
    expect(response.text).toBe('Access denied. No token provided.');
  });

  it('Auth powinien odrzucić dostęp z nieoprawnym tokenem', async () => {
    const response = await supertest(app)
      .get('/test-protected')
      .set('Authorization', 'Bearer invalid-token');

    expect(response.status).toBe(400);
    expect(response.text).toBe('Invalid token.');
  });
});
