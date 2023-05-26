import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateGenreDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty({message: 'Не введен жанр'})
    @ApiProperty()
    readonly genre: string;
}