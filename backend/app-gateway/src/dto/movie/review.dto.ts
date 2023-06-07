import { ApiProperty } from "@nestjs/swagger";

export class ReviewDto {
    @ApiProperty({ description: 'id review'})
    id: number;

    @ApiProperty({ description: 'название '})
    readonly title: string;

    @ApiProperty({ description: 'пользователь'})
    readonly userName: string;

    @ApiProperty({ description: 'дата'})
    readonly data: number;

    @ApiProperty({ description: 'лайки'})
    readonly like: number;

    @ApiProperty({ description: 'описание'})
    readonly description: string;
}