import { Body, Controller, Delete, Get, Inject, Param, Post, Put, UploadedFile, UploadedFiles, UseInterceptors, UseGuards } from '@nestjs/common';
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
import {Roles} from "./roles.decorator";
import {RolesGuard} from "./roles.guard";

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
  @ApiResponse({status: 200, description: 'Создание жанра', type: CreateGenreDto})
  @ApiResponse({status: 400, description: 'Дупликат жанра', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  createGenre(@Body() dto: CreateGenreDto) {
    return this.clientMovie.send('create.genre', dto.genre);
  }

  @Delete('/genre')
  @ApiResponse({status: 200, description: 'Удаление жанра', type: String})
  @ApiResponse({status: 404, description: 'Такого жанра нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  deleteGenre(@Body() dto: DeleteGenreDto) {
    return this.clientMovie.send('delete.genre', dto.id);
  }

  @Put('/genre')
  @ApiResponse({status: 200, description: 'Обновление жанра', type: CreateGenreDto})
  @ApiResponse({status: 400, description: 'Дупликат жанра', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'Такого жанра нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  updateGenre(@Body() dto: UpdateGenreDto) {
    return this.clientMovie.send('update.genre', dto);
  }

  @Get('/genre')
  @ApiResponse({status: 200, description: 'Получение жанров', type: [CreateGenreDto]})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  getAllGenres() {
    return this.clientMovie.send('get.all.genres', '');
  }

  @Post('/country')
  @ApiResponse({status: 200, description: 'Создание страны', type: CreateCountryDto})
  @ApiResponse({status: 400, description: 'Дупликат страны', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  createCountry(@Body() dto: CreateCountryDto) {
    return this.clientMovie.send('create.country', dto.country);
  }

  @Delete('/country')
  @ApiResponse({status: 200, description: 'Создание страны', type: CreateCountryDto})
  @ApiResponse({status: 404, description: 'Такой страны нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  deleteCountry(@Body() dto: DeleteCountryDto) {
    return this.clientMovie.send('delete.country', dto.id);
  }

  @Put('/country')
  @ApiResponse({status: 200, description: 'Создание страны', type: CreateCountryDto})
  @ApiResponse({status: 400, description: 'Дупликат страны', type: HttpExceptionDto})
  @ApiResponse({status: 404, description: 'Такой страны нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  async updateCountry(@Body() dto: UpdateCountryDto) {
    return this.clientMovie.send('update.country', dto);
  }

  @Post('/movie')
  @ApiResponse({status: 200, description: 'Создание фильма', type: CreateMovieDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  createMovie(@Body() dto: CreateMovieDto) {
    return this.clientMovie.send('create.movie', dto);
  }

  @Delete('/movie')
  @ApiResponse({status: 200, description: 'Удаление фильма', type: String})
  @ApiResponse({status: 404, description: 'Такого фильма нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  deleteMovie(@Body() dto: DeleteMovieDto) {
    return  this.clientMovie.send('delete.movie', dto.id)
  }

  @Put('/movie')
  @ApiResponse({status: 200, description: 'Обновление фильма', type: CreateMovieDto})
  @ApiResponse({status: 404, description: 'Такого фильма нет', type: HttpExceptionDto})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  updateMovie(@Body() dto: UpdateMovieDto) {
    return this.clientMovie.send('update.movie', dto)
  }

  @Get('/movie')
  @ApiResponse({status: 200, description: 'Получение фильмов', type: [CreateMovieDto]})
  @Roles('Admin')
  @UseGuards(RolesGuard)
  getAllMovies() {
    return this.clientMovie.send('get.all.movies', '')
  }
}
