import {  Controller, Get, Inject, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { MovieDto, MovieDtoWithActors } from "../dto/movie/movie.dto";

@ApiTags('Movie')
@Controller('/Movie')
export class FilmController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy,
  @Inject('Movie')
  private clientMovie: ClientProxy) {}


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