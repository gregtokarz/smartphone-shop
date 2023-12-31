import supertest from 'supertest';
import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';
import adminMiddleware from '../middleware/admin';
import {beforeEach, describe, expect, it} from "@jest/globals";

describe('Admin Middleware Tests', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use(adminMiddleware);
    app.get('/test-admin', (req, res) => res.status(200).send('Admin route'));
  });

  it('Powinien zezwolić na dostęp dla admin userów z poprawnym tokenem', async () => {
    const token = jwt.sign({isAdmin: true}, config.JwtSecret);
    const response = await supertest(app)
      .get('/test-admin')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Admin route');
  });

  it('Powinien odrzucić dostęp dla nie admina z poprawnym tokenem', async () => {
    const token = jwt.sign({isAdmin: false}, config.JwtSecret);
    const response = await supertest(app)
      .get('/test-admin')
      .set('Authorization', `Bearer ${token}`);

    expect(response.status).toBe(403);
    expect(response.text).toBe('Access denied.');
  });
});
