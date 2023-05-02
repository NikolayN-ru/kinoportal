import {ApiProperty} from "@nestjs/swagger";
import {IsEmail} from "class-validator";

export class LoginUserDto {
    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    readonly password: string;
}
