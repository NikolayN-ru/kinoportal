import {Body, Request, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe, Req, Inject} from '@nestjs/common';
import { ClientProxy } from "@nestjs/microservices";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpExceptionDto } from "../dto/HttpException/http.exception.dto";
import { LoginUserDto } from 'src/dto/auth/login-user.dto';
import { CreateUserDto } from 'src/dto/auth/create-user.dto';
import {AuthGuard} from "@nestjs/passport";

@ApiTags('Auth')
@Controller('auth')
export class AuthController {

    constructor(@Inject('Auth')
    private clientAuth: ClientProxy){}

    @ApiOperation({summary: 'Логин пользователя'})
    @ApiResponse({status: 200, type: LoginUserDto})
    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.clientAuth.send('login',userDto);
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200, type: CreateUserDto})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() registrationDto: CreateUserDto) {
        return this.clientAuth.send('registration',registrationDto);
    }

    @Get('')
    regHello() {
        return 'hello auth'
    }


    @Get('google-redirect')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req,) {
        // handles the Google OAuth2 callback
        return this.clientAuth.send('reportJwt',req);
    }

    @Get('protected')
    @UseGuards(AuthGuard('jwt'))
    protectedResource(@Req() req) {
        return this.clientAuth.send('userInfo',req);
    }

    @ApiOperation({summary: 'Авторизация пользователя через вк'})
    @ApiResponse({status: 200, type: String})
    @Get('/vkontakte/callback')
    @UseGuards(AuthGuard('vkontakte'))
    vkLogin(@Request() req) {
        return this.clientAuth.send('otherLogin',req);
    }

}