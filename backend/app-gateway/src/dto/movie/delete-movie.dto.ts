import {IsNotEmpty} from "class-validator";

export class DeleteMovieDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    readonly id: number;
}