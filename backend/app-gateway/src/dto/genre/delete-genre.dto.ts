import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DeleteGenreDto {
    @IsNotEmpty()
    @IsNumber()
    @ApiProperty()
    readonly id: number;
}