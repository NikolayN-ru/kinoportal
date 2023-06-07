import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class DeleteMovieDto {
    @ApiProperty({ description: 'id Фильма'})
    @IsNotEmpty({message: 'Не введен индетификатор'})
    readonly id: number;
}