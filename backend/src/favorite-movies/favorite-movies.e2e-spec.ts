// src/favorite-movies/favorite-movies.e2e-spec.ts
import request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../app.module';

describe('FavoriteMoviesController (e2e)', () => {
  let app;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/favorite-movies (GET)', () => {
    return request(app.getHttpServer())
      .get('/favorite-movies')
      .expect(200)
      .expect(({ body }) => {
        expect(Array.isArray(body)).toBe(true);
      });
  });

  it('/favorite-movies (POST)', () => {
    const movie = { id: 1, title: 'Movie 1', favorite: true };
    return request(app.getHttpServer())
      .post('/favorite-movies')
      .send(movie)
      .expect(201)
      .expect(({ body }) => {
        expect(body).toEqual(movie);
      });
  });

  it('/favorite-movies/:id (DELETE)', () => {
    return request(app.getHttpServer())
      .delete('/favorite-movies/1')
      .expect(200);
  });

  afterAll(async () => {
    await app.close();
  });
});
