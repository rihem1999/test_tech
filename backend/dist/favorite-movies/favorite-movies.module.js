"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteMoviesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const favourite_movie_entity_1 = require("./favourite-movie.entity");
const favorite_movies_service_1 = require("./favorite-movies.service");
const favorite_movies_controller_1 = require("./favorite-movies.controller");
let FavoriteMoviesModule = class FavoriteMoviesModule {
};
exports.FavoriteMoviesModule = FavoriteMoviesModule;
exports.FavoriteMoviesModule = FavoriteMoviesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([favourite_movie_entity_1.FavoriteMovie])],
        providers: [favorite_movies_service_1.FavoriteMoviesService],
        controllers: [favorite_movies_controller_1.FavoriteMoviesController],
    })
], FavoriteMoviesModule);
//# sourceMappingURL=favorite-movies.module.js.map