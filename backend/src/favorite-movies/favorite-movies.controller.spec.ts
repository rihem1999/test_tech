// src/favorite-movies/favorite-movies.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteMoviesController } from './favorite-movies.controller';
import { FavoriteMoviesService } from './favorite-movies.service';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';
import { FavoriteMovie } from './favourite-movie.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

describe('FavoriteMoviesController', () => {
  let controller: FavoriteMoviesController;
  let service: FavoriteMoviesService;

  const mockMovie: FavoriteMovie = { 
    id: 1, 
    title: 'Movie 1', 
    description: 'Description of Movie 1', 
    releaseDate: '2024-01-01'
  };

  const mockFavoriteMoviesService = {
    findAll: jest.fn().mockResolvedValue([mockMovie]),
    findOne: jest.fn().mockResolvedValue(mockMovie),
    create: jest.fn().mockResolvedValue(mockMovie),
    update: jest.fn().mockResolvedValue(mockMovie),
    remove: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteMoviesController],
      providers: [
        { provide: FavoriteMoviesService, useValue: mockFavoriteMoviesService },
      ],
    }).compile();

    controller = module.get<FavoriteMoviesController>(FavoriteMoviesController);
    service = module.get<FavoriteMoviesService>(FavoriteMoviesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a favorite movie', async () => {
    const createDto: CreateFavoriteMovieDto = { 
      title: 'Movie 1', 
      description: 'Description of Movie 1', 
      releaseDate: '2024-01-01' 
    };
    const result = await controller.create(createDto);
    expect(result).toEqual(mockMovie);
    expect(service.create).toHaveBeenCalledWith(createDto);
  });

  it('should return all favorite movies', async () => {
    const result = await controller.findAll();
    expect(result).toEqual([mockMovie]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('should return a favorite movie by id', async () => {
    const result = await controller.findOne('1');
    expect(result).toEqual(mockMovie);
    expect(service.findOne).toHaveBeenCalledWith(1);
  });

  it('should update a favorite movie', async () => {
    const updateDto: UpdateFavoriteMovieDto = { 
      title: 'Updated Movie 1', 
      description: 'Updated description', 
      releaseDate: '2024-01-02' 
    };
    const result = await controller.update('1', updateDto);
    expect(result).toEqual(mockMovie);
    expect(service.update).toHaveBeenCalledWith(1, updateDto);
  });

  it('should remove a favorite movie', async () => {
    await controller.remove('1');
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
