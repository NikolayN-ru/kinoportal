import {Body, Controller, Get, Param, Post, Query} from '@nestjs/common';
import {MovieService} from "./movie.service";
import {CreateReviewDto} from "./dto/create-review.dto";
import {Ctx, EventPattern, MessagePattern, Payload, RmqContext} from "@nestjs/microservices";
import {CreateCommentDto} from "./dto/create-comment";

@Controller('movie')
export class MovieController {

    constructor(private movieService: MovieService) {}

    @Get('')
    getMain() {
        return this.movieService.getMain();
    }

    @Get('/filters')
    getMovieWithFilter(@Query('genre') genre?: string,
                       @Query('year') year?: string,
                       @Query('country') country?: string) {
        return this.movieService.getMovieWithFilter(genre, year, country);
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

    @EventPattern('get_comments')
    async getReviewWithComments(id: number) {
        return this.movieService.getReviewWithComments(id)
    }

    @EventPattern('create_comment')
    async createComment(dto: CreateCommentDto) {
        return this.movieService.createComment(dto);
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
