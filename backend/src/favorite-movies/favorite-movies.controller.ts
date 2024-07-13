import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FavoriteMoviesService } from './favorite-movies.service';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';

@Controller('favorite-movies')
export class FavoriteMoviesController {
  constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}

  @Post()
  create(@Body() createFavoriteMovieDto: CreateFavoriteMovieDto) {
    return this.favoriteMoviesService.create(createFavoriteMovieDto);
  }

  @Get()
  findAll() {
    return this.favoriteMoviesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteMoviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteMovieDto: UpdateFavoriteMovieDto) {
    return this.favoriteMoviesService.update(+id, updateFavoriteMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteMoviesService.remove(+id);
  }
}
