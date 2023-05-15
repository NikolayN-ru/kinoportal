import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateMovieDto {
    @IsNotEmpty({message: 'Не введен title'})
    readonly title: string;

    @IsNotEmpty({message: 'Не введен title'})
    readonly titleEng: string;

    @IsNotEmpty({message: 'Не введен год'})
    @IsNumber()
    readonly year: number;

    @IsNotEmpty({message: 'Не введено качество'})
    readonly quality: string;

    @IsNotEmpty({message: 'Не введен рейтинг'})
    @IsNumber()
    readonly rating: number;

    @IsNotEmpty({message: 'Не введено описание'})
    readonly description: string;

    @IsNotEmpty({message: 'Не введены жанры'})
    readonly genres: string;

    @IsNotEmpty({message: 'Не введены страны'})
    readonly countries: string;

    @IsNotEmpty({message: 'Не введены актеры'})
    readonly actors: string;

    @IsNotEmpty({message: 'Не введены режиссеры'})
    readonly directors: string;

    @IsNotEmpty({message: 'Не введен '})
    readonly imgVideo: string;
}