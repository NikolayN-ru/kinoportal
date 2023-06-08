import { ApiProperty } from "@nestjs/swagger";

export class getMovieFilerDto {
    @ApiProperty({ description: 'год'})
    year?: number;

    @ApiProperty({ description: 'жанр'})
    genre?: string;

    @ApiProperty({ description: 'рейтинг'})
    rating?: number;

    @ApiProperty({ description: 'странна'})
    country?: string;

    @ApiProperty({ description: 'количетсво голосов'})
    votes?: number;

    @ApiProperty({ description: 'актер'})
    actor?: string;

    @ApiProperty({ description: 'режесер'})
    director?: string;

    @ApiProperty({ description: 'поле для сортировки'})
    sort?: string;

    @ApiProperty({ description: 'количество записей начало -1'})
    limitStart?: number;

    @ApiProperty({ description: 'количество записей конец'})
    limitEnd?: number;
}