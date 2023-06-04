import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ActorDto, ActorWitMovie, ActorWithImageDto } from '../dto/actor/actor.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionDto } from '../dto/HttpException/http.exception.dto';

@ApiTags('actor')
@Controller('/actor')
export class ActorController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy) {}

  @Get('/all')
  @ApiResponse({status: 200, description: 'get all actor', type: [ActorWithImageDto]})
  getAllActor(){
    return this.clientActor.send('get.all.actor', '')
  }

  @Get('/filtr')
  @ApiResponse({status: 200, description: 'get actors by fio', type: [ActorDto]})
  @ApiBody({type: 'fio'})
  getActorsByFio(@Body() fio : any){
    return this.clientActor.send('get.actor.by.fio', fio.fio)
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'get actor by id', type: ActorWitMovie})
  @ApiResponse({status: 400, description: 'id not entered', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'actor not found', type: HttpExceptionDto})
  getActor(@Param('id') actorId : number){
    return this.clientActor.send('get.actor', actorId)
  }
}
