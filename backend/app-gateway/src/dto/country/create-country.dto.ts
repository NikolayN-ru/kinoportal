import {IsNotEmpty} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCountryDto {
    @IsNotEmpty()
    @ApiProperty()
    readonly country: string;
}