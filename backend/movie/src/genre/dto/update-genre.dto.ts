import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateGenreDto {
    readonly id: number;

    readonly genre: string;
}