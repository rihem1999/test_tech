import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteMovie } from './favourite-movie.entity';
import { FavoriteMoviesService } from './favorite-movies.service';
import { FavoriteMoviesController } from './favorite-movies.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteMovie])],
  providers: [FavoriteMoviesService],
  controllers: [FavoriteMoviesController],
})
export class FavoriteMoviesModule {}
