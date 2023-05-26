import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class DeleteMovieDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @ApiProperty()
    readonly id: number;
}