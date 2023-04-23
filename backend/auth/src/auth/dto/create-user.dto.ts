import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({example: '134@gmail.ru', description: 'Почта пользоавателя'})
    readonly email: string;

    @ApiProperty({example: 'feffa234a', description: 'Пароль пользоавателя'})
    readonly password: string;
}
