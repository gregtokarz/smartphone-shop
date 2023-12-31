import config from '../config';
import {describe, expect, it} from "@jest/globals";

describe('Konfiguracja bazy danych', () => {
  it('Plik powinien mieć zdefiniowaną właściwość port', () => {
    expect(config.port).toBeDefined();
  });

  it('Plik powinien mieć zdefiniowany port 3001', () => {
    process.env.PORT = undefined;
    const defaultConfig = require('../config').default;
    expect(defaultConfig.port).toEqual(3001);
  });

  it('Plik powinien mieć zdefiniowaną właściwość databaseUrl', () => {
    expect(config.databaseUrl).toBeDefined();
  });

  it('Plik powinien mieć zdefiniowaną wartość JwtSecret', () => {
    expect(config.JwtSecret).toBeDefined();
  });

  it('Plik powinien mieć zdefiniowaną wartość "secret" kiedy nie jest dostarczony przez process.env', () => {
    process.env.JWT_SECRET = undefined;
    const defaultConfig = require('../config').default;
    expect(defaultConfig.JwtSecret).toEqual('secret');
  });

});
