import { Repository } from 'typeorm';
import { FavoriteMovie } from './favourite-movie.entity';
import { CreateFavoriteMovieDto } from './dto/create-favorite-movie.dto';
import { UpdateFavoriteMovieDto } from './dto/update-favourite-movie.dto';
export declare class FavoriteMoviesService {
    private favoriteMoviesRepository;
    constructor(favoriteMoviesRepository: Repository<FavoriteMovie>);
    create(createFavoriteMovieDto: CreateFavoriteMovieDto): Promise<FavoriteMovie>;
    findAll(): Promise<FavoriteMovie[]>;
    findOne(id: number): Promise<FavoriteMovie>;
    update(id: number, updateFavoriteMovieDto: UpdateFavoriteMovieDto): Promise<FavoriteMovie>;
    remove(id: number): Promise<void>;
}
