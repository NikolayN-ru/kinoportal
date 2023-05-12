import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateCommentDto {
    @ApiProperty({example: 'Крутой фильм', description: 'Комментарий пользователя'})
    @IsNotEmpty({message: 'Не введен комментарий'})
    readonly comment: string;
}
