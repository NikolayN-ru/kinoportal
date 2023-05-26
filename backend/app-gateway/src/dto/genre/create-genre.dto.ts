import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateGenreDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly genre: string;
}