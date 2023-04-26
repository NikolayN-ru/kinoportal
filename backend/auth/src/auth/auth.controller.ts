import {Body, Controller, Get, Post} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";


@ApiTags('Авторизация')
@Controller('')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Логин пользователя'})
    @ApiResponse({status: 200, type: String})
    @Post('auth/login')
    login(@Body() userDto: CreateUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200, type: String})
    @Post('auth/registration')
    registration(@Body() registrationDto: CreateUserDto) {
        return this.authService.registration(registrationDto);
    }

    @Get('')
    regHello() {
        return 'hello auth'
    }
}
