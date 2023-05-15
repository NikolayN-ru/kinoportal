import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ActorDto, ActorWithImageDto } from 'src/dto/actor/actor.dto';
import { ActorIdDto } from 'src/dto/actor/actorId.dto';
import { AddActorDto } from 'src/dto/actor/add.actor.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionDto } from '../dto/HttpException/http.exception.dto';
import { Test } from '../dto/actor/test';

@ApiTags('actor')
@Controller('/actor')
export class ActorController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy) {}

  @Get('/all')
  @ApiResponse({status: 200, description: 'get all actor', type: [ActorWithImageDto]})
  @ApiResponse({status: 404, description: 'actors not found', type: HttpExceptionDto})
  getAllActor(){
    return this.clientActor.send('get.all.actor', '')
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'get actor by id', type: ActorWithImageDto})
  @ApiResponse({status: 400, description: 'id not entered', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'actor not found', type: HttpExceptionDto})
  getActor(@Param('id') actorId : number){
    return this.clientActor.send('get.actor', actorId)
  }
}
