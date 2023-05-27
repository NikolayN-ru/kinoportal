import {Injectable} from '@nestjs/common';
import {MovieService} from "../movie/movie.service";

@Injectable()
export class AppService {

    constructor(private movieService: MovieService) {}

    async getMain() {
        return await this.movieService.getMain();
    }

    async getMovie(id: number) {
        return await this.movieService.getMovie(id)
    }
}
