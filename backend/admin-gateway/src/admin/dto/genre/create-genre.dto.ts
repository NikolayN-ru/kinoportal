import {IsNotEmpty} from "class-validator";

export class CreateGenreDto {
    @IsNotEmpty()
    readonly genre: string;
}