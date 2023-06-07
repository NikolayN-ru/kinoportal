import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsOptional} from "class-validator";

export class CreateCommentDto {
    @ApiProperty({example: 'Крутой фильм', description: 'Комментарий пользователя'})
    @IsNotEmpty({message: 'Не введен комментарий'})
    readonly comment: string;

    @ApiProperty({ description: 'id пользователя'})
    @IsOptional()
    @IsNumber()
    parentId: number;
}
