import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateMovieDto {
    @IsNotEmpty({message: 'Не введен title'})
    @ApiProperty()
    readonly title: string;

    @IsNotEmpty({message: 'Не введен title'})
    @ApiProperty()
    readonly titleEng: string;

    @IsNotEmpty({message: 'Не введен год'})
    // @IsNumber()
    @ApiProperty()
    readonly year: number;

    @IsNotEmpty({message: 'Не введено качество'})
    @ApiProperty()
    readonly quality: string;

    @IsNotEmpty({message: 'Не введен рейтинг'})
    // @IsNumber()
    @ApiProperty()
    readonly rating: number;

    @IsNotEmpty({message: 'Не введен оценки'})
    // @IsNumber()
    @ApiProperty()
    readonly votes: number;

    @IsNotEmpty({message: 'Не введено описание'})
    @ApiProperty()
    readonly description: string;

    @IsNotEmpty({message: 'Не введены жанры'})
    @ApiProperty()
    readonly genres: string;

    @IsNotEmpty({message: 'Не введены страны'})
    @ApiProperty()
    readonly countries: string;

    @IsNotEmpty({message: 'Не введены актеры'})
    @ApiProperty()
    readonly actors: string;

    @IsNotEmpty({message: 'Не введены режиссеры'})
    @ApiProperty()
    readonly directors: string;

    @IsNotEmpty({message: 'Не введен '})
    @ApiProperty()
    readonly imgVideo: string;
}