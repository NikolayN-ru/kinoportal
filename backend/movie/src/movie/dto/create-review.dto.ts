import {IsNotEmpty, IsNumber} from "class-validator";

export class CreateReviewDto {
    @IsNotEmpty({message: 'Не введен title '})
    readonly title: string;

    @IsNotEmpty({message: 'Не введен имя пользоваталей'})
    readonly userName: string;

    @IsNotEmpty()
    readonly data: number;

    @IsNotEmpty({message: 'Не введено количество лайков '})
    @IsNumber()
    readonly like: number;

    @IsNotEmpty({message: 'Не введена рецензия'})
    readonly description: string;
}
