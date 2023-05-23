import { ActorDto } from "../actor/actor.dto";

export class MovieDto {
    readonly id: number;

    readonly title: string;

    readonly titleEng: string;

    readonly year: number;

    readonly quality: string;

    readonly rating: number;

    readonly votes: number;

    readonly description: string;

    readonly genres: string;

    readonly countries: string;

    readonly actors: Array<number>;

    readonly directors: Array<number>;

    readonly imgVideo: string;
}

export class MovieDtoWithActors {
    movie: MovieDto;
    actors: Array<ActorDto>
}