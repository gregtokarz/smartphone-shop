import express from 'express';
import supertest from 'supertest';
import business from '../business/business.container';
import postEndpoint from '../REST/post.endpoint';
import { jest } from '@jest/globals';


jest.mock('../business/business.container', () => ({
  getPostManager: jest.fn(() => ({
    query: jest.fn(),
  })),
}));

const app = express();
postEndpoint(app);

describe('GET /api/posts', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn(() => mockResponse),
      send: jest.fn(),
    };

    express.response = { ...express.response, ...mockResponse };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of posts', async () => {
    // Arrange
    const expectedPosts = [{ postId: 1, title: 'Post 1' }];
    business.getPostManager().query.mockResolvedValueOnce(expectedPosts);

    // Act
    supertest(app).get('/api/posts');

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(200);
    expect(mockResponse.send).toHaveBeenCalledWith(expectedPosts);
  });

  it('should log an error and return status 500 on failure', async () => {
    // Arrange
    business.getPostManager().query.mockRejectedValueOnce('Mock error');

    // Act
    supertest(app).get('/api/posts');

    // Assert
    expect(mockResponse.status).toHaveBeenCalledWith(500);
    expect(mockResponse.send).toHaveBeenCalledWith('An error occurred');
    expect(console.log).toHaveBeenCalledWith('Mock error');
  });
});
