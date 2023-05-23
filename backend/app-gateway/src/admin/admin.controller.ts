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
  @ApiBody({type: CreateGenreDto})
  @ApiResponse({status: 200, description: 'post genre', type: String})
  @ApiResponse({status: 400, description: 'Такой жанр уже есть', type: HttpExceptionDto})
  createGenre(@Body() dto: CreateGenreDto) {
      return this.clientMovie.send('create.genre', dto.genre);
  }

  @Delete('/genre')
  @ApiBody({type: DeleteGenreDto})
  @ApiResponse({status: 200, description: 'delete genre', type: String})
  @ApiResponse({status: 404, description: 'genre not found', type: HttpExceptionDto})
  deleteGenre(@Body() dto: DeleteGenreDto) {
      return this.clientMovie.send('delete.genre', dto.id);
  }

  @Put('/genre')
  @ApiBody({type: UpdateGenreDto})
  @ApiResponse({status: 200, description: 'post genre', type: String})
  @ApiResponse({status: 400, description: 'Такой жанр уже есть', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'genre not found', type: HttpExceptionDto})
  updateGenre(@Body() dto: UpdateGenreDto) {
      return this.clientMovie.send('update.genre', dto);
  }

  @Post('/country')
  @ApiBody({type: CreateCountryDto})
  @ApiResponse({status: 200, description: 'post country', type: String})
  @ApiResponse({status: 400, description: 'Такая страна уже есть', type: HttpExceptionDto})
  createCountry(@Body() dto: CreateCountryDto) {
      return this.clientMovie.send('create.country', dto.country);
  }

  @Delete('/country')
  @ApiBody({type: DeleteCountryDto})
  @ApiResponse({status: 200, description: 'delete country', type: String})
  @ApiResponse({status: 404, description: 'genre not found', type: HttpExceptionDto})
  deleteCountry(@Body() dto: DeleteCountryDto) {
      return this.clientMovie.send('delete.country', dto.id);
  }

  @Put('/country')
  @ApiBody({type: UpdateCountryDto})
  @ApiResponse({status: 200, description: 'post country', type: String})
  @ApiResponse({status: 400, description: 'Такая страна уже есть', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'country not found', type: HttpExceptionDto})
  async updateCountry(@Body() dto: UpdateCountryDto) {
      return this.clientMovie.send('update.country', dto);
  }

  @Post('/movie')
  @UseInterceptors(FilesInterceptor('image'))
  @ApiBody({type: CreateMovieDto})
  @ApiResponse({status: 201, description: 'post movie', type: String})
  @ApiResponse({status: 400, description: 'Неверные данные', type: HttpExceptionDto})
  createMovie(@Body() data: CreateMovieDto,
  @UploadedFiles() image: Array<any>){
    try{
      return this.clientMovie.send('create.movie', {data: data,image: image}).toPromise();
    }
    catch(e){
      console.log(e);
    }
  }

  @Delete('/movie')
  @ApiBody({type: DeleteMovieDto})
  @ApiResponse({status: 200, description: 'delete movie', type: String})
  @ApiResponse({status: 404, description: 'movie not found', type: HttpExceptionDto})
  deleteMovie(@Body() dto: DeleteMovieDto) {
      return  this.clientMovie.send('delete.movie', dto.id)
  }

  @Put('/movie')
  @ApiBody({type: UpdateCountryDto})
  @ApiResponse({status: 200, description: 'post movie', type: String})
  @ApiResponse({status: 400, description: 'Неверные данные', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'movie not found', type: HttpExceptionDto})
  updateMovie(@Body() dto: UpdateMovieDto) {
      return this.clientMovie.send('update.movie', dto)
  }

}
