import {Controller, HttpException, HttpStatus} from '@nestjs/common';
import {EventPattern} from "@nestjs/microservices";
import {GenreService} from "./genre.service";
import {UpdateGenreDto} from "./dto/update-genre.dto";

@Controller('genre')
export class GenreController {
    constructor(private genreService: GenreService) {}

    @EventPattern('create.genre')
    createGenre(genre: string) {
        return this.genreService.createGenre(genre);
    }

    @EventPattern('delete.genre')
    deleteGenre(id: number) {
        return this.genreService.deleteGenre(id);
    }

    @EventPattern('update.genre')
    updateGenre(dto: UpdateGenreDto) {
        return this.genreService.updateGenre(dto.id, dto.genre);
    }
}
