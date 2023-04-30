import {Body, Request, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {GoogleOAuthGuard} from "./google/google-oauth.guard";
import {LoginUserDto} from "./dto/login-user.dto";
import {AuthGuard} from "@nestjs/passport";


@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @ApiOperation({summary: 'Логин пользователя'})
    @ApiResponse({status: 200, type: String})
    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200, type: String})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() registrationDto: CreateUserDto) {
        return this.authService.registration(registrationDto);
    }

    @Get('')
    regHello() {
        return 'hello auth'
    }

    @Get('/google-redirect')
    @UseGuards(GoogleOAuthGuard)
    googleLogin(@Request() req) {
        return this.authService.otherLogin(req);
    }

    @Get('/vkontakte/callback')
    @UseGuards(AuthGuard('vkontakte'))
    vkLogin(@Request() req) {
        return this.authService.otherLogin(req);
    }
}
