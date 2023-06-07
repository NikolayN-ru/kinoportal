import { Controller } from '@nestjs/common';
import {MovieService} from "./movie.service";
import {Ctx, EventPattern, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {UpdateMovieDto} from "./dto/update-movie.dto";
import {getMovieFilerDto} from "./dto/get-movie-filter.dto";

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @EventPattern('get.movie.with.filter')
    async getMovieWithFilter(dto: getMovieFilerDto) {
        return (await this.movieService.getMovieWithFilter(dto.genre, dto.year, dto.country, dto.rating, dto.votes, dto.actor, dto.director, dto.sort)).slice(0,dto.limit);
    }

    @EventPattern('get.movie')
    getMovie(id: number) {
        return this.movieService.getMovie(id);
    }

    @EventPattern('get.reviews')
    getReviews(id: number) {
        return this.movieService.getReviews(id);
    }

    @EventPattern('create.review')
    createReview(data) {
        return this.movieService.createReview(data.id, data.dto);
    }

    @EventPattern('get.comments')
    getReviewWithComments(id: number) {
        return this.movieService.getReviewWithComments(id)
    }

    @EventPattern('create.comment')
    createComment(dto: CreateCommentDto) {
        return this.movieService.createComment(dto);
    }

    @EventPattern('create.movie')
    createMovie(dto: CreateMovieDto) {
        return this.movieService.createMovie(dto, dto.image);
    }

    @EventPattern('delete.movie')
    deleteMovie(id: number) {
        return this.movieService.deleteMovie(id);
    }

    @EventPattern('update.movie')
    updateMovie(dto: UpdateMovieDto) {
        return this.movieService.updateMovie(dto);
    }

    @EventPattern('get.all.movies')
    getAllMovies() {
        return this.movieService.getAllMovies();
    }

    @MessagePattern('get.movie.for.actor')
    async getMovies(@Payload() data: any, @Ctx() context: RmqContext) {
        return this.movieService.getMovies(data);
    }

    @MessagePattern('get.movie')
    async getMovieById(@Payload() data: any, @Ctx() context: RmqContext) {
        return this.movieService.getMovie(data);
    }
}
