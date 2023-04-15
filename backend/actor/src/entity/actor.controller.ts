import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from 'src/dto/actor.dto';
import { ActorIdDto } from 'src/dto/actorId.dto';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AddActorDto } from 'src/dto/add.actor.dto';
import { HttpExceptionDto } from 'src/dto/http.exeption.dto';

@ApiTags('Actor')
@Controller('/actor')
export class ActorController {
    
    constructor(private readonly actorService: ActorService) {}

    @Get(':id')
    @ApiResponse({status: 200, description: 'вывод актера по id', type: ActorDto})
    @ApiResponse({status: 404, description: 'Не нашел актера с таким id', type: HttpExceptionDto})
    getActor(@Param('id') actorId : number){
        return this.actorService.getActor(actorId);
    }

    @Post()
    @ApiBody({type: AddActorDto})
    @ApiResponse({status: 201, description: 'Добалвен актер', type: String})
    @ApiResponse({status: 400, description: 'Не ввели имя или фамилию', type: HttpExceptionDto})
    addActor(@Body() actorDto: AddActorDto){
        return this.actorService.addActor(actorDto);
    }

    @Put()
    @ApiBody({type: ActorDto})
    @ApiResponse({status: 200, description: 'Изменен актер', type: String})
    @ApiResponse({status: 400, description: 'Не ввели id', type: HttpExceptionDto})
    @ApiResponse({status: 404, description: 'Не нашел актера с таким id', type: HttpExceptionDto})
    updateActor(@Body() actorDto: ActorDto){
        return this.actorService.updateActor(actorDto);
    }

    @Delete()
    @ApiBody({type: ActorIdDto})
    @ApiResponse({status: 200, description: 'удален актер', type: String})
    @ApiResponse({status: 400, description: 'Не ввели id', type: HttpExceptionDto})
    @ApiResponse({status: 404, description: 'Не нашел актера с таким id', type: HttpExceptionDto})
    deleteActor(@Body() actorIdDto: ActorIdDto){
        return this.actorService.deleteActor(actorIdDto.actorId);
    }
}