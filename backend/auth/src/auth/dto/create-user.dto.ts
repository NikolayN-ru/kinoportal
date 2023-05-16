import {ApiProperty} from "@nestjs/swagger";
import {IsEmail} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'Alex', description: 'Имя пользоавателя'})
    readonly username: string;

    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    @IsEmail({}, {message: "Некорректный email"})
    readonly email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    readonly password: string;
}
