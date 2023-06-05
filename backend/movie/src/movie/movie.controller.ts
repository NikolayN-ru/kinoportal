import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {MovieService} from "./movie.service";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Ctx, EventPattern, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {CreateCommentDto} from "./dto/create-comment.dto";
import {CreateMovieDto} from "./dto/create-movie.dto";
import {UpdateMovieDto} from "./dto/update-movie.dto";

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    // @Get('')
    // getMain() {
    //     return this.movieService.getMain();
    // }

    @Get('/filters')
    getMovieWithFilter(@Query('genre') genre?: string,
                       @Query('year') year?: string,
                       @Query('country') country?: string,
                       @Query('rating') rating?: string,
                       @Query('votes') votes?: string,
                       @Query('actor') actor?: string,
                       @Query('director') director?: string,
                       @Query('sort') sort?: string) {
        return this.movieService.getMovieWithFilter(genre, year, country, +rating, +votes, actor, director, sort);
    }

    @Get('/:id')
    getMovie(@Param('id') id: string) {
        return this.movieService.getMovie(+id);
    }

    @Get('/:id/reviews')
    getReviews(@Param('id') id: string) {
        return this.movieService.getReviews(+id);
    }

    @Post('/:id/reviews')
    createReview(@Param('id') id: string, @Body() reviewDto: CreateReviewDto) {
        return this.movieService.createReview(+id, reviewDto);
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
        return this.movieService.updateMovie(dto.id, dto.title);
    }

    @EventPattern('get.all.movies')
    getAllMovies() {
        return this.movieService.getAllMovies();
    }

    @MessagePattern('get.movie.for.actor')
    async getMovies(@Payload() data: any, @Ctx() context: RmqContext) {
        return this.movieService.getMoviesById(data);
    }

    @MessagePattern('get.movie')
    async getMovieById(@Payload() data: any, @Ctx() context: RmqContext) {
        return this.movieService.getMovie(data);
    }
}
