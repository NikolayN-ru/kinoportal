import {IsNotEmpty, IsNumber} from "class-validator";

export class UpdateCountryDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    readonly id: number;

    @IsNotEmpty({message: 'Не введена страна'})
    readonly country: string;
}