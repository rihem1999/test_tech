import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteMovie } from './favorite-movies/favourite-movie.entity';
import { FavoriteMoviesModule } from './favorite-movies/favorite-movies.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Rihem_8520',
      database: 'favourite_movies_db',
      entities: [FavoriteMovie],
      synchronize: true,
    }),
    FavoriteMoviesModule,
  ],
})
export class AppModule {}
