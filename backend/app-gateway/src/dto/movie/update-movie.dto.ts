import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateMovieDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty({message: 'Не введен название'})
    @ApiProperty()
    readonly title: string;

    @IsNotEmpty({message: 'Не введен название по-английски'})
    @ApiProperty()
    readonly titleEng: string;
}