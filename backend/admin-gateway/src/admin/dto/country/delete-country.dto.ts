import {IsNotEmpty, IsNumber} from "class-validator";

export class DeleteCountryDto {
    @IsNotEmpty()
    @IsNumber()
    readonly id: number;
}