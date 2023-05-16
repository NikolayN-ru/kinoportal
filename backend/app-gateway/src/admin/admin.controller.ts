import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ActorDto, ActorWithImageDto } from 'src/dto/actor/actor.dto';
import { ActorIdDto } from 'src/dto/actor/actorId.dto';
import { AddActorDto } from 'src/dto/actor/add.actor.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionDto } from '../dto/HttpException/http.exception.dto';
import { Test } from '../dto/actor/test';

@ApiTags('admin')
@Controller('/admin')
export class AdminController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy) {}

  @Get('/actor')
  @ApiResponse({status: 200, description: 'get all actor', type: [ActorWithImageDto]})
  @ApiResponse({status: 404, description: 'actors not found', type: HttpExceptionDto})
  getAllActor(){
    return this.clientActor.send('get.all.actor', '')
  }

  @Post('/actor')
  @UseInterceptors(FilesInterceptor('image'))
  @ApiBody({type: ActorWithImageDto})
  @ApiResponse({status: 201, description: 'post actor', type: String})
  @ApiResponse({status: 400, description: 'first_name or last_name not entered', type: HttpExceptionDto})
  addActor(@Body() actorDto: AddActorDto, 
  @UploadedFiles() image: Array<Express.Multer.File>){
    return this.clientActor.send('post.actor', {actorDto,image}).toPromise(); 
  }

  @Put('/actor')
  @ApiBody({type: ActorDto})
  @ApiResponse({status: 200, description: 'update actor', type: String})
  @ApiResponse({status: 400, description: 'id not entered', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'actor not found', type: HttpExceptionDto})
  updateActor(@Body() actorDto: ActorDto){
    return this.clientActor.send('put.actor', actorDto).toPromise();
  }

  @Delete('/actor')
  @ApiBody({type: ActorIdDto})
  @ApiResponse({status: 200, description: 'delete actor', type: String})
  @ApiResponse({status: 400, description: 'id not entered', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'actor not found', type: HttpExceptionDto})
  deleteActor(@Body() actorIdDto: ActorIdDto){
    return this.clientActor.send('delete.actor', actorIdDto).toPromise();
  }
}
