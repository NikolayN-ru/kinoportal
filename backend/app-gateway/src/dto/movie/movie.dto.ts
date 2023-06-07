import { ApiProperty } from "@nestjs/swagger";
import { ActorDto } from "../actor/actor.dto";

export class MovieDto {
    @ApiProperty({ description: 'id фильма'})
    readonly id: number;

    @ApiProperty({ description: 'Название'})
    readonly title: string;

    @ApiProperty({ description: 'Название на английском'})
    readonly titleEng: string;

    @ApiProperty({ description: 'год'})
    readonly year: number;

    @ApiProperty({ description: 'качество'})
    readonly quality: string;

    @ApiProperty({ description: 'рейтинг'})
    readonly rating: number;

    @ApiProperty({ description: 'количество голосов'})
    readonly votes: number;

    @ApiProperty({ description: 'описание'})
    readonly description: string;

    @ApiProperty({ description: 'жанры'})
    readonly genres: string;

    @ApiProperty({ description: 'страны'})
    readonly countries: string;

    @ApiProperty({ description: 'актеры'})
    readonly actors: Array<number>;

    @ApiProperty({ description: 'режессеры'})
    readonly directors: Array<number>;

    @ApiProperty({ description: 'главная картинка'})
    readonly imgVideo: string;
}

export class MovieDtoWithActors {
    @ApiProperty({ description: 'фильм'})
    movie: MovieDto;

    @ApiProperty({ description: 'актеры и режесеры'})
    actors: Array<ActorDto>
}