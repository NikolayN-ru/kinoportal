import {Controller, Get, Inject, Param, Query, Post, Body} from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { ActorWithImageDto } from "../dto/actor/actor.dto";
import { MovieDto, MovieDtoWithActors } from "src/dto/movie/movie.dto";
import {CreateReviewDto} from "./dto/create-review.dto";

@ApiTags('Movie')
@Controller('/Movie')
export class FilmController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy,
  @Inject('Movie')
  private clientMovie: ClientProxy) {}

  @Get('/filters')
  getMovieWithFilter(@Query('genre') genre?: string,
                     @Query('year') year?: string,
                     @Query('country') country?: string,
                     @Query('rating') rating?: string,
                     @Query('votes') votes?: string,
                     @Query('actor') actor?: string,
                     @Query('director') director?: string,
                     @Query('sort') sort?: string) {
    return this.clientMovie.send('get.movie.with.filter', {
      genre: genre,
      year: year,
      country: country,
      rating: +rating,
      votes: +votes,
      actor: actor,
      director: director,
      sort: sort
  });
  }

  @Get('/:id')
  getMovie(@Param('id') id: string) {
    return this.clientMovie.send('get.movie', +id);
  }

  @Get('/:id/reviews')
  getReviews(@Param('id') id: string) {
    return this.clientMovie.send('get.reviews', +id);
  }

  @Post('/:id/reviews')
  createReview(@Param('id') id: string, @Body() reviewDto: CreateReviewDto) {
    return this.clientMovie.send('create.review', {
      id: +id,
      dto: reviewDto});
  }

  @Get('/all')
  @ApiResponse({status: 200, description: 'get movies actor', type: [MovieDto]})
  @ApiResponse({status: 404, description: 'movies not found', type: HttpExceptionDto})
  async getAllMovie(){
    return await this.clientMovie.send('get.all.movies', '').toPromise();
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