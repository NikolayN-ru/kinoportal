import { ApiProperty } from "@nestjs/swagger";

export class GenreDto {
    @ApiProperty({ description: 'id жанра'})
    readonly id: number;

    @ApiProperty({ description: 'название жанра'})
    readonly genre: string;
}