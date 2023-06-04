import {IsEmail, IsNotEmpty} from "class-validator";

export class LoginUserDto {
    @IsEmail({}, {message: "Некорректный email"})
    @IsNotEmpty({message: 'Не введен email'})
    readonly email: string;

    @IsNotEmpty({message: 'Не введен пароль'})
    readonly password: string;
}
