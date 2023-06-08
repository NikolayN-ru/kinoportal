import { ApiProperty } from "@nestjs/swagger";

export class CountryDto {
    @ApiProperty({ description: 'id страны'})
    readonly id: number;

    @ApiProperty({ description: 'название страны'})
    readonly country: string;
}