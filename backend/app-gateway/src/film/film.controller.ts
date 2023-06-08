import {Controller, Get, Inject, Param, Query, Post, Body} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { MovieDto, MovieDtoWithActors } from "src/dto/movie/movie.dto";
import {CreateReviewDto} from "./dto/create-review.dto";
import { ReviewDto } from "src/dto/movie/review.dto";
import { CountryDto } from "src/dto/movie/country.dto";
import { GenreDto } from "src/dto/movie/genre.dto";

@ApiTags('Movie')
@Controller('/Movie')
export class FilmController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy,
  @Inject('Movie')
  private clientMovie: ClientProxy) {}

  @Get('/filters')
  @ApiResponse({status: 200, description: 'get reviews', type: [MovieDto]})
  @ApiResponse({status: 404, description: 'movies not found', type: HttpExceptionDto})
  getMovieWithFilter(@Query('genre') genre?: string,
                     @Query('year') year?: string,
                     @Query('country') country?: string,
                     @Query('rating') rating?: string,
                     @Query('votes') votes?: string,
                     @Query('actor') actor?: string,
                     @Query('director') director?: string,
                     @Query('sort') sort?: string,
                     @Query('limitStart') limitStart?: string,
                     @Query('limitEnd') limitEnd?: string){
    return this.clientMovie.send('get.movie.with.filter', {
      genre: genre,
      year: year,
      country: country,
      rating: +rating,
      votes: +votes,
      actor: actor,
      director: director,
      sort: sort,
      limitStart: limitStart,
      limitEnd: limitEnd
  });
  }

  @Get('/:id/reviews')
  @ApiResponse({status: 200, description: 'get reviews', type: [ReviewDto]})
  @ApiResponse({status: 404, description: 'movies not found', type: HttpExceptionDto})
  getReviews(@Param('id') id: string) {
    return this.clientMovie.send('get.reviews', +id);
  }

  @Post('/:id/reviews')
  @ApiResponse({status: 200, description: 'post reviews', type: ReviewDto})
  @ApiResponse({status: 400, description: 'movies not found', type: HttpExceptionDto})
  createReview(@Param('id') id: string, @Body() reviewDto: CreateReviewDto) {
    return this.clientMovie.send('create.review', {
      id: +id,
      dto: reviewDto});
  }

  @Get('/all')
  @ApiResponse({status: 200, description: 'get movies actor', type: [MovieDto]})
  async getAllMovie(){
    return await this.clientMovie.send('get.all.movies', '').toPromise();
  }


  @Get('/all/genres')
  @ApiResponse({status: 200, description: 'get genres', type: [GenreDto]})
  async getAllGenres(){
    return await this.clientMovie.send('get.all.genres', '').toPromise();
  }

  @Get('/all/country')
  @ApiResponse({status: 200, description: 'get countrys', type: [CountryDto]})
  async getAllCountry(){
    return await this.clientMovie.send('get.all.countries', '').toPromise();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'get movie by id', type: MovieDtoWithActors})
  @ApiResponse({status: 404, description: 'movie not found', type: HttpExceptionDto})
  async getMovieById(@Param('id') filmId : number){
    try{
      const movie = await this.clientMovie.send('get.movie', filmId).toPromise();
      let actors = [];
      if(movie === 404){
        return {
          status:404,
          message:'Not found'
        }
      }
      actors = await this.clientActor.send('get.all.actor.film', filmId).toPromise();
      return {
        ...movie,
        actors: actors
      }
    }
    catch(e){
      console.log(e);
    }
  }
}