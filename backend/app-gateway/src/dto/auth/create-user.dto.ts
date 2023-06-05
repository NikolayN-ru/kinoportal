import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsNotEmpty} from "class-validator";

export class CreateUserDto {
    @ApiProperty({example: 'Alex', description: 'Имя пользоавателя'})
    @IsNotEmpty({message: 'Не введено имя'})
    readonly username: string;

    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    @IsEmail({}, {message: "Некорректный email"})
    @IsNotEmpty({message: 'Не введен email'})
    readonly email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    @IsNotEmpty({message: 'Не введен пароль'})
    readonly password: string;
}
