import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateCountryDto {
    @ApiProperty({ description: 'id страны'})
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @ApiProperty({ description: 'название страны'})
    @IsNotEmpty({message: 'Не введена страна'})
    readonly country: string;
}