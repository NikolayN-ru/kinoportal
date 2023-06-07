import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber} from "class-validator";

export class DeleteCountryDto {
    @ApiProperty({ description: 'id страны'})
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
}