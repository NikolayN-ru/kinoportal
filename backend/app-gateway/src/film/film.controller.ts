import {  Controller, Get, Inject, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { ActorWithImageDto } from "../dto/actor/actor.dto";

@ApiTags('film')
@Controller('/film')
export class FilmController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy,
  @Inject('Movie')
  private clientMovie: ClientProxy) {}


  @Get('/all')
  async getAllFilm(){
    return await this.clientMovie.send('get.all.movies', '').toPromise();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'get all film by id', type: [ActorWithImageDto]})
  @ApiResponse({status: 404, description: 'film not found', type: HttpExceptionDto})
  async getAllActorForFilm(@Param('id') filmId : number){
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