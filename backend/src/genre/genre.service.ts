import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Genre} from "./entity/genre.entity";

@Injectable()
export class GenreService {
    constructor(@InjectRepository(Genre) private genreRepository: Repository<Genre>) {}

    async createGenre(genre: string) {
        try {
            const newGenre = new Genre();
            newGenre.genre = genre;

            return await this.genreRepository.save(newGenre);
        } catch (e) {
            return e.message;
        }
    }

    async deleteGenre(id: number) {
        try {
            return await this.genreRepository.delete({
                id: id
            })
        } catch (e) {
            return e.message;
        }
    }

    async updateGenre(id: number, genre: string) {
        try {
            return await this.genreRepository.save({
                id: id,
                genre: genre
            })
        } catch (e) {
            return e.message;
        }
    }
}
