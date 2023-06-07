import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateGenreDto {
    @ApiProperty({ description: 'id жанра'})
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @ApiProperty({ description: 'название жанра'})
    @IsNotEmpty({message: 'Не введен жанр'})
    readonly genre: string;
}