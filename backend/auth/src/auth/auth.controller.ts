import {Body, Request, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe, Req} from '@nestjs/common';
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
    @ApiResponse({status: 200, type: LoginUserDto})
    @UsePipes(ValidationPipe)
    @Post('/login')
    login(@Body() userDto: LoginUserDto) {
        return this.authService.login(userDto);
    }

    @ApiOperation({summary: 'Регистрация пользователя'})
    @ApiResponse({status: 200, type: CreateUserDto})
    @UsePipes(ValidationPipe)
    @Post('/registration')
    registration(@Body() registrationDto: CreateUserDto) {
        return this.authService.registration(registrationDto);
    }

    @Get('')
    regHello() {
        return 'hello auth'
    }

    // @Get('google')
    // @UseGuards(AuthGuard('google'))
    // async googleAuth(@Req() req) {}
    //
    // @ApiOperation({summary: 'Авторизация пользователя через гугл'})
    // @ApiResponse({status: 200, type: String})
    // @Get('/google-redirect')
    // @UseGuards(AuthGuard('google'))
    // googleLogin(@Request() req) {
    //     return this.authService.otherLogin(req);
    // }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    googleLogin() {
        // initiates the Google OAuth2 login flow
    }

    @Get('google-redirect')
    @UseGuards(AuthGuard('google'))
    googleLoginCallback(@Req() req,) {
        // handles the Google OAuth2 callback
        return this.authService.reportJwt(req)
    }

    @Get('protected')
    @UseGuards(AuthGuard('jwt'))
    protectedResource(@Req() req) {
        return this.authService.userInfo(req);
    }

    @ApiOperation({summary: 'Авторизация пользователя через вк'})
    @ApiResponse({status: 200, type: String})
    @Get('/vkontakte/callback')
    @UseGuards(AuthGuard('vkontakte'))
    vkLogin(@Request() req) {
        return this.authService.otherLogin(req);
    }

}
