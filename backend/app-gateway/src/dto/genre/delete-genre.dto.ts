import {IsNotEmpty, IsNumber} from "class-validator";

export class DeleteGenreDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
}