import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Genre} from "./entity/genre.entity";

@Injectable()
export class GenreService {
    constructor(@InjectRepository(Genre) private genreRepository: Repository<Genre>) {}

    async createGenre(genreName: string) {
        try {
            const genre = await this.genreRepository.findOneBy({
                genre: genreName
            })
            if(genre) throw new HttpException('Такой жанр уже есть', HttpStatus.BAD_REQUEST);
            const newGenre = new Genre();
            newGenre.genre = genreName;

            return await this.genreRepository.save(newGenre);
        } catch (e) {
            return e.message;
        }
    }

    async deleteGenre(id: number) {
        try {
            const genre = await this.genreRepository.delete({
                id: id
            });
            if(!genre.affected) return HttpStatus.NOT_FOUND;
            return 'Жанр удален';
        } catch (e) {
            return e.message;
        }
    }

    async updateGenre(id: number, genre: string) {
        try {
            const duplicatedGenre = await this.genreRepository.findOneBy({
                genre: genre
            })
            if(duplicatedGenre) throw new HttpException('Такой жанр уже есть', HttpStatus.BAD_REQUEST);

            const updatedGenre = await this.genreRepository.findOneBy({
                id: id,
            });
            if(!updatedGenre) return HttpStatus.NOT_FOUND;

            updatedGenre.genre = genre;
            await this.genreRepository.save(updatedGenre);

            return updatedGenre;
        } catch (e) {
            return e.message;
        }
    }
}
