import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateReviewDto {
    @ApiProperty({ description: 'название'})
    @IsNotEmpty({message: 'Не введен title '})
    readonly title: string;

    @ApiProperty({ description: 'пользователь'})
    @IsNotEmpty({message: 'Не введен имя пользоваталей'})
    readonly userName: string;

    @ApiProperty({ description: 'дата'})
    @IsNotEmpty()
    readonly data: number;

    @ApiProperty({ description: 'количество лайков'})
    @IsNotEmpty({message: 'Не введено количество лайков '})
    @IsNumber()
    readonly like: number;

    @ApiProperty({ description: 'описание'})
    @IsNotEmpty({message: 'Не введена рецензия'})
    readonly description: string;
}
