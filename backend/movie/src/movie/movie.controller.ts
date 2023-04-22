import {Body, Controller, Get, Param, Post, Query, Req} from '@nestjs/common';
import {MovieService} from "./movie.service";
import {CreateReviewDto} from "./dto/create-review.dto";

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

}
