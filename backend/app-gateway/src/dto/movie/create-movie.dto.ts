import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateMovieDto {
    @ApiProperty({ description: 'Название'})
    @IsNotEmpty({message: 'Не введен title'})
    readonly title: string;

    @ApiProperty({ description: 'Название на Англ'})
    @IsNotEmpty({message: 'Не введен title'})
    readonly titleEng: string;

    @ApiProperty({ description: 'год'})
    @IsNotEmpty({message: 'Не введен год'})
    @IsNumber()
    readonly year: number;

    @ApiProperty({ description: 'качество'})
    @IsNotEmpty({message: 'Не введено качество'})
    readonly quality: string;

    @ApiProperty({ description: 'рейтинг'})
    @IsNotEmpty({message: 'Не введен рейтинг'})
    @IsNumber()
    readonly rating: number;

    @ApiProperty({ description: 'описание'})
    @IsNotEmpty({message: 'Не введено описание'})
    readonly description: string;

    @ApiProperty({ description: 'Жанры'})
    @IsNotEmpty({message: 'Не введены жанры'})
    readonly genres: string;

    @ApiProperty({ description: 'Странны'})
    @IsNotEmpty({message: 'Не введены страны'})
    readonly countries: string;

    @ApiProperty({ description: 'Актеры'})
    @IsNotEmpty({message: 'Не введены актеры'})
    readonly actors: string;

    @ApiProperty({ description: 'режиссеры'})
    @IsNotEmpty({message: 'Не введены режиссеры'})
    readonly directors: string;

    @ApiProperty({ description: 'главная картинка'})
    @IsNotEmpty({message: 'Не введен '})
    readonly imgVideo: string;

    @ApiProperty({ description: 'доп.материалы и трейлеры'})
    @ApiProperty()
    readonly dopContent: Array<any>;
}