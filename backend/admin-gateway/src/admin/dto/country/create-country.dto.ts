import {IsNotEmpty} from "class-validator";

export class CreateCountryDto {
    @IsNotEmpty()
    readonly country: string;
}