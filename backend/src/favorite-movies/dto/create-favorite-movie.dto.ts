import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFavoriteMovieDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  releaseDate: string;
}
