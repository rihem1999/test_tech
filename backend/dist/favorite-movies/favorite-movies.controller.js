"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteMoviesController = void 0;
const common_1 = require("@nestjs/common");
const favorite_movies_service_1 = require("./favorite-movies.service");
const create_favorite_movie_dto_1 = require("./dto/create-favorite-movie.dto");
const update_favourite_movie_dto_1 = require("./dto/update-favourite-movie.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let FavoriteMoviesController = class FavoriteMoviesController {
    constructor(favoriteMoviesService) {
        this.favoriteMoviesService = favoriteMoviesService;
    }
    create(createFavoriteMovieDto) {
        return this.favoriteMoviesService.create(createFavoriteMovieDto);
    }
    findAll() {
        return this.favoriteMoviesService.findAll();
    }
    findOne(id) {
        return this.favoriteMoviesService.findOne(+id);
    }
    update(id, updateFavoriteMovieDto) {
        return this.favoriteMoviesService.update(+id, updateFavoriteMovieDto);
    }
    remove(id) {
        return this.favoriteMoviesService.remove(+id);
    }
};
exports.FavoriteMoviesController = FavoriteMoviesController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_favorite_movie_dto_1.CreateFavoriteMovieDto]),
    __metadata("design:returntype", void 0)
], FavoriteMoviesController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FavoriteMoviesController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteMoviesController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_favourite_movie_dto_1.UpdateFavoriteMovieDto]),
    __metadata("design:returntype", void 0)
], FavoriteMoviesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FavoriteMoviesController.prototype, "remove", null);
exports.FavoriteMoviesController = FavoriteMoviesController = __decorate([
    (0, common_1.Controller)('favorite-movies'),
    __metadata("design:paramtypes", [favorite_movies_service_1.FavoriteMoviesService])
], FavoriteMoviesController);
//# sourceMappingURL=favorite-movies.controller.js.map