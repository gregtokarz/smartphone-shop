import {afterAll, beforeAll, describe, expect, it} from "@jest/globals";

const mockPort = 3001;
const mockDatabaseUrl = "mongodb+srv://administrator:A7EoWyaA2Muh1xiS@shop.cw0h3nh.mongodb.net/";
const mockJwtSecret = 'secret';

beforeAll(() => {
  process.env.PORT = mockPort.toString();
  process.env.MONGODB_URI = mockDatabaseUrl;
  process.env.JWT_SECRET = mockJwtSecret;
});

afterAll(() => {
  delete process.env.PORT;
  delete process.env.MONGODB_URI;
  delete process.env.JWT_SECRET;
});

describe('Configuration Integration Test', () => {
  const originalConfig = require('../config').default;

  it('should use the provided port from environment variable', () => {
    expect(originalConfig.port).toBe(mockPort);
  });

  it('should use the provided databaseUrl from environment variable', () => {
    expect(originalConfig.databaseUrl).toBe(mockDatabaseUrl);
  });

  it('should use the provided JwtSecret from environment variable', () => {
    expect(originalConfig.JwtSecret).toBe(mockJwtSecret);
  });

  it('should use default values if environment variables are not set', () => {
    delete process.env.PORT;
    delete process.env.MONGODB_URI;
    delete process.env.JWT_SECRET;

    const defaultConfig = require('../config').default;

    expect(defaultConfig.port).toBe(3001);
    expect(defaultConfig.databaseUrl).toBe('mongodb+srv://administrator:A7EoWyaA2Muh1xiS@shop.cw0h3nh.mongodb.net/');
    expect(defaultConfig.JwtSecret).toBe('secret');
  });
});
