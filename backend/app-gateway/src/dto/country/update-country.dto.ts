import {IsNotEmpty, IsNumber} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateCountryDto {
    @IsNotEmpty({message: 'Не введен индетификатор'})
    @IsNumber()
    @ApiProperty()
    readonly id: number;

    @IsNotEmpty({message: 'Не введена страна'})
    @ApiProperty()
    readonly country: string;
}