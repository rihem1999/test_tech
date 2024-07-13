// src/favorite-movies/favorite-movies.controller.ts
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoriteMoviesService } from './favorite-movies.service';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('favorite-movies')
export class FavoriteMoviesController {
  constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createFavoriteMovieDto: CreateFavoriteMovieDto) {
    return this.favoriteMoviesService.create(createFavoriteMovieDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.favoriteMoviesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoriteMoviesService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFavoriteMovieDto: UpdateFavoriteMovieDto) {
    return this.favoriteMoviesService.update(+id, updateFavoriteMovieDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteMoviesService.remove(+id);
  }
}
