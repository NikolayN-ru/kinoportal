import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ActorDto, ActorWithImageDto } from 'src/dto/actor/actor.dto';
import { ActorIdDto } from 'src/dto/actor/actorId.dto';
import { AddActorDto } from 'src/dto/actor/add.actor.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpExceptionDto } from '../dto/HttpException/http.exception.dto';
import { Test } from '../dto/actor/test';
import { CreateGenreDto } from 'src/dto/genre/create-genre.dto';
import { DeleteGenreDto } from 'src/dto/genre/delete-genre.dto';
import { UpdateGenreDto } from 'src/dto/genre/update-genre.dto';
import { CreateCountryDto } from 'src/dto/country/create-country.dto';
import { DeleteCountryDto } from 'src/dto/country/delete-country.dto';
import { UpdateCountryDto } from 'src/dto/country/update-country.dto';
import { DeleteMovieDto } from 'src/dto/movie/delete-movie.dto';
import { UpdateMovieDto } from 'src/dto/movie/update-movie.dto';
import { CreateMovieDto } from 'src/dto/movie/create-movie.dto';

@ApiTags('admin')
@Controller('/admin')
export class AdminController {
  constructor(@Inject('Actor')
  private clientActor: ClientProxy,
  @Inject('Movie')
  private clientMovie: ClientProxy) {}

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
  
  @Post('/genre')
  createGenre(@Body() dto: CreateGenreDto) {
      return this.clientMovie.send('create.genre', dto.genre);
  }

  @Delete('/genre')
  deleteGenre(@Body() dto: DeleteGenreDto) {
      return this.clientMovie.send('delete.genre', dto.id);
  }

  @Put('/genre')
  updateGenre(@Body() dto: UpdateGenreDto) {
      return this.clientMovie.send('update.genre', dto);
  }

  @Post('/country')
  createCountry(@Body() dto: CreateCountryDto) {
      return this.clientMovie.send('create.country', dto.country);
  }

  @Delete('/country')
  deleteCountry(@Body() dto: DeleteCountryDto) {
      return this.clientMovie.send('delete.country', dto.id);
  }

  @Put('/country')
  async updateCountry(@Body() dto: UpdateCountryDto) {
      return this.clientMovie.send('update.country', dto);
  }

  @Post('/movie')
  @UseInterceptors(FilesInterceptor('image'))
  createMovie(@Body() data: CreateMovieDto,
  @UploadedFiles() image: Array<Express.Multer.File>){
    try{
      return this.clientMovie.send('create.movie', {data: data,image: image}).toPromise();
    }
    catch(e){
      console.log(e);
    }
  }

  @Delete('/movie')
  deleteMovie(@Body() dto: DeleteMovieDto) {
      return  this.clientMovie.send('delete.movie', dto.id)
  }

  @Put('/movie')
  updateMovie(@Body() dto: UpdateMovieDto) {
      return this.clientMovie.send('update.movie', dto)
  }

  @Get('/movie')
  getAllMovies() {
      return this.clientMovie.send('get.all.movies', '')
  }
}
