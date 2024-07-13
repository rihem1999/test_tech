import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FavoriteMovie } from './favourite-movie.entity';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    @InjectRepository(FavoriteMovie)
    private favoriteMoviesRepository: Repository<FavoriteMovie>,
  ) {}

  create(createFavoriteMovieDto: CreateFavoriteMovieDto): Promise<FavoriteMovie> {
    const favoriteMovie = this.favoriteMoviesRepository.create(createFavoriteMovieDto);
    return this.favoriteMoviesRepository.save(favoriteMovie);
  }

  findAll(): Promise<FavoriteMovie[]> {
    return this.favoriteMoviesRepository.find();
  }

  findOne(id: number): Promise<FavoriteMovie> {
    return this.favoriteMoviesRepository.findOneBy({ id });
  }

  async update(id: number, updateFavoriteMovieDto: UpdateFavoriteMovieDto): Promise<FavoriteMovie> {
    await this.favoriteMoviesRepository.update(id, updateFavoriteMovieDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.favoriteMoviesRepository.delete(id);
  }
}
