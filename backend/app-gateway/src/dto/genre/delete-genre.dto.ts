import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class DeleteGenreDto {
    @ApiProperty({ description: 'id жанра'})
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
}