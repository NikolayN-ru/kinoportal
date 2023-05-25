import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateMovieDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @IsNotEmpty({message: 'Не введен название'})
    readonly title: string;

    @IsNotEmpty({message: 'Не введен название по-английски'})
    readonly titleEng: string;
}