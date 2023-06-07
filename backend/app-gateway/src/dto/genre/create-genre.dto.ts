import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateGenreDto {
    @ApiProperty({ description: 'жанр'})
    @IsNotEmpty()
    readonly genre: string;
}