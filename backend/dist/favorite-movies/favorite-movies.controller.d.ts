import { FavoriteMoviesService } from './favorite-movies.service';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';
export declare class FavoriteMoviesController {
    private readonly favoriteMoviesService;
    constructor(favoriteMoviesService: FavoriteMoviesService);
    create(createFavoriteMovieDto: CreateFavoriteMovieDto): Promise<import("./favourite-movie.entity").FavoriteMovie>;
    findAll(): Promise<import("./favourite-movie.entity").FavoriteMovie[]>;
    findOne(id: string): Promise<import("./favourite-movie.entity").FavoriteMovie>;
    update(id: string, updateFavoriteMovieDto: UpdateFavoriteMovieDto): Promise<import("./favourite-movie.entity").FavoriteMovie>;
    remove(id: string): Promise<void>;
}
