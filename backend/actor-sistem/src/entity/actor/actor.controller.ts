import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorDto } from '../../dto/actor.dto';
import { ActorIdDto } from 'src/dto/actorId.dto';
import { AddActorDto, AddActorWithImageDto } from '../../dto/add.actor.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class ActorController {
    
    constructor(private readonly actorService: ActorService) {}

    @MessagePattern('get.actor')
    getActor(@Payload() data: number, @Ctx() context: RmqContext) {  
        return this.actorService.getActor(data);
    }

    @MessagePattern('get.all.actor')
    getAllActor(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.actorService.getAllActors();
    }

    @MessagePattern('get.all.actor.film')
    getActorForFilm(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.actorService.getActorsForFilm(data);
    }

    @MessagePattern('post.actor')
    postActor(@Payload() data: AddActorWithImageDto, @Ctx() context: RmqContext) {    
        return this.actorService.addActor(data.actorDto,data.image);

    }

    @MessagePattern('put.actor')
    putActor(@Payload() data: ActorDto, @Ctx() context: RmqContext) {       
        return this.actorService.updateActor(data);
    }

    @MessagePattern('delete.actor')
    deleteActor(@Payload() data: ActorIdDto, @Ctx() context: RmqContext) {       
        return this.actorService.deleteActor(data.actorId);
    }
}