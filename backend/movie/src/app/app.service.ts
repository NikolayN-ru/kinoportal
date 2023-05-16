import { Injectable } from '@nestjs/common';
import {MovieService} from "../movie/movie.service";

@Injectable()
export class AppService {

    constructor(private movieService: MovieService) {}

    async getMain() {
        const movies = await this.movieService.getMain();
        return movies;
    }

    async getMovie(id: number) {
        const movie = await this.movieService.getMovie(id);
        return movie
    }
}
