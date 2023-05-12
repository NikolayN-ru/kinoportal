import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateGenreDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @IsNotEmpty({message: 'Не введен жанр'})
    readonly genre: string;
}