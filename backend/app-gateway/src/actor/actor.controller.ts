import { Body, Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ActorDto, ActorWitMovie } from '../dto/actor/actor.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionDto } from '../dto/HttpException/http.exception.dto';
import { ActorFilterDto } from 'src/dto/actor/actor.filter.dto';

@ApiTags('actor')
@Controller('/actor')
export class ActorController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy) {}

  @Get('/all')
  @ApiResponse({status: 200, description: 'get all actor', type: [ActorDto]})
  getAllActor(){
    return this.clientActor.send('get.all.actor', '')
  }

  @Get('/filtr')
  @ApiResponse({status: 200, description: 'get actors by fio', type: [ActorDto]})
  getActorsByFio(@Query('fio') fio?: string){
    return this.clientActor.send('get.actor.by.fio', fio)
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'get actor by id', type: ActorWitMovie})
  @ApiResponse({status: 400, description: 'id not entered', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'actor not found', type: HttpExceptionDto})
  getActor(@Param('id') actorId : number){
    return this.clientActor.send('get.actor', actorId)
  }
}
