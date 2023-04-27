import {  Controller, Get, Inject, Param } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { ActorWithImageDto } from "../dto/actor/actor.dto";

@ApiTags('film')
@Controller('/film')
export class FilmController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy) {}


  @Get(':id')
  @ApiResponse({status: 200, description: 'get all actor by film', type: [ActorWithImageDto]})
  @ApiResponse({status: 404, description: 'actors not found', type: HttpExceptionDto})
  getAllActorForFilm(@Param('id') filmId : number){
    try{
      return this.clientActor.send('get.all.actor.film', filmId);
    }
    catch(e){
      console.log(e);
    }
  }
}