"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFavoriteMovieDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_favorite_movie_dto_1 = require("./create-favorite-movie.dto");
class UpdateFavoriteMovieDto extends (0, mapped_types_1.PartialType)(create_favorite_movie_dto_1.CreateFavoriteMovieDto) {
}
exports.UpdateFavoriteMovieDto = UpdateFavoriteMovieDto;
//# sourceMappingURL=update-favourite-movie.dto.js.map