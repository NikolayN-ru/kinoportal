import {Body, Controller, Delete, Get, Inject, Post, Put} from '@nestjs/common';
import {ClientProxy} from "@nestjs/microservices";
import {UpdateGenreDto} from "./dto/genre/update-genre.dto";
import {UpdateCountryDto} from "./dto/country/update-country.dto";
import {DeleteMovieDto} from "./dto/movie/delete-movie.dto";
import {CreateMovieDto} from "./dto/movie/create-movie.dto";
import {DeleteGenreDto} from "./dto/genre/delete-genre.dto";
import {CreateGenreDto} from "./dto/genre/create-genre.dto";
import {CreateCountryDto} from "./dto/country/create-country.dto";
import {DeleteCountryDto} from "./dto/country/delete-country.dto";
import {UpdateMovieDto} from "./dto/movie/update-movie.dto";

@Controller('admin')
export class AdminController {

    constructor(@Inject('MOVIE_SERVICE') private readonly client: ClientProxy) {}

    @Post('/genre')
    createGenre(@Body() dto: CreateGenreDto) {
        return this.client.send('create.genre', dto.genre);
    }

    @Delete('/genre')
    deleteGenre(@Body() dto: DeleteGenreDto) {
        return this.client.send('delete.genre', dto.id);
    }

    @Put('/genre')
    updateGenre(@Body() dto: UpdateGenreDto) {
        return this.client.send('update.genre', dto);
    }

    @Post('/country')
    createCountry(@Body() dto: CreateCountryDto) {
        return this.client.send('create.country', dto.country);
    }

    @Delete('/country')
    deleteCountry(@Body() dto: DeleteCountryDto) {
        return this.client.send('delete.country', dto.id);
    }

    @Put('/country')
    async updateCountry(@Body() dto: UpdateCountryDto) {
        return this.client.send('update.country', dto);
    }

    @Post('/movie')
    createMovie(@Body() dto: CreateMovieDto) {
        return this.client.send('create.movie', dto);
    }

    @Delete('/movie')
    deleteMovie(@Body() dto: DeleteMovieDto) {
        return  this.client.send('delete.movie', dto.id)
    }

    @Put('/movie')
    updateMovie(@Body() dto: UpdateMovieDto) {
        return this.client.send('update.movie', dto)
    }

    @Get('/movie')
    getAllMovies() {
        return this.client.send('get.all.movies', '')
    }
}
