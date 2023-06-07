import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class CreateCountryDto {
    @ApiProperty({ description: 'страна'})
    @IsNotEmpty()
    readonly country: string;
}