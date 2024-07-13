// src/favorite-movies/favorite-movies.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMovie } from './favourite-movie.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';

describe('FavoriteMoviesService', () => {
  let service: FavoriteMoviesService;
  let repository: Repository<FavoriteMovie>;

  const mockMovie: FavoriteMovie = {
    id: 1,
    title: 'Movie 1',
    description: 'Description of Movie 1',
    releaseDate: '2024-01-01',
  };

  const mockFavoriteMoviesRepository = {
    create: jest.fn().mockReturnValue(mockMovie),
    save: jest.fn().mockResolvedValue(mockMovie),
    find: jest.fn().mockResolvedValue([mockMovie]),
    findOneBy: jest.fn().mockResolvedValue(mockMovie),
    update: jest.fn().mockResolvedValue(undefined),
    delete: jest.fn().mockResolvedValue(undefined),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FavoriteMoviesService,
        {
          provide: getRepositoryToken(FavoriteMovie),
          useValue: mockFavoriteMoviesRepository,
        },
      ],
    }).compile();

    service = module.get<FavoriteMoviesService>(FavoriteMoviesService);
    repository = module.get<Repository<FavoriteMovie>>(getRepositoryToken(FavoriteMovie));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a favorite movie', async () => {
    const createDto: CreateFavoriteMovieDto = {
      title: 'Movie 1',
      description: 'Description of Movie 1',
      releaseDate: '2024-01-01',
    };
    const result = await service.create(createDto);
    expect(result).toEqual(mockMovie);
    expect(mockFavoriteMoviesRepository.create).toHaveBeenCalledWith(createDto);
    expect(mockFavoriteMoviesRepository.save).toHaveBeenCalledWith(mockMovie);
  });

  it('should return all favorite movies', async () => {
    const result = await service.findAll();
    expect(result).toEqual([mockMovie]);
    expect(mockFavoriteMoviesRepository.find).toHaveBeenCalled();
  });

  it('should return a favorite movie by id', async () => {
    const result = await service.findOne(1);
    expect(result).toEqual(mockMovie);
    expect(mockFavoriteMoviesRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should update a favorite movie', async () => {
    const updateDto: UpdateFavoriteMovieDto = {
      title: 'Updated Movie 1',
      description: 'Updated description',
      releaseDate: '2024-01-02',
    };
    const result = await service.update(1, updateDto);
    expect(result).toEqual(mockMovie);
    expect(mockFavoriteMoviesRepository.update).toHaveBeenCalledWith(1, updateDto);
    expect(mockFavoriteMoviesRepository.findOneBy).toHaveBeenCalledWith({ id: 1 });
  });

  it('should remove a favorite movie', async () => {
    await service.remove(1);
    expect(mockFavoriteMoviesRepository.delete).toHaveBeenCalledWith(1);
  });
});
