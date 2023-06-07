import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateMovieDto {
    @ApiProperty({ description: 'id фильма'})
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @ApiProperty({ description: 'Название'})
    @IsNotEmpty({message: 'Не введен название'})
    readonly title: string;

    @ApiProperty({ description: 'Название на английском'})
    @IsNotEmpty({message: 'Не введен название по-английски'})
    readonly titleEng: string;
}