import {Body, Request, Controller, Get, Post, UseGuards, UsePipes, ValidationPipe, Req} from '@nestjs/common';
import {AuthService} from "./auth.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {GoogleOAuthGuard} from "./google/google-oauth.guard";
import {LoginUserDto} from "./dto/login-user.dto";
import {AuthGuard} from "@nestjs/passport";
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';


@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}


    @MessagePattern('login')
    login(@Payload() data: LoginUserDto, @Ctx() context: RmqContext) {  
        return this.authService.login(data);
    }

    @MessagePattern('registration')
    registration(@Payload() data: CreateUserDto, @Ctx() context: RmqContext) {  
        return this.authService.registration(data);
    }

    @MessagePattern('reportJwt')
    googleLoginCallback(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.authService.reportJwt(data)
    }

    @MessagePattern('userInfo')
    protectedResource(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.authService.userInfo(data);
    }

    @MessagePattern('otherLogin')
    vkLogin(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.authService.otherLogin(data);
    }

    // @UsePipes(ValidationPipe)
    // @Post('/login')
    // login(@Body() userDto: LoginUserDto) {
    //     return this.authService.login(userDto);
    // }

    // @UsePipes(ValidationPipe)
    // @Post('/registration')
    // registration(@Body() registrationDto: CreateUserDto) {
    //     return this.authService.registration(registrationDto);
    // }

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

    // @Get('google')
    // @UseGuards(AuthGuard('google'))
    // googleLogin() {
    //     // initiates the Google OAuth2 login flow
    // }

    // @Get('google-redirect')
    // @UseGuards(AuthGuard('google'))
    // googleLoginCallback(@Req() req,) {
    //     // handles the Google OAuth2 callback
    //     return this.authService.reportJwt(req)
    // }

    // @Get('protected')
    // @UseGuards(AuthGuard('jwt'))
    // protectedResource(@Req() req) {
    //     return this.authService.userInfo(req);
    // }

    // @Get('/vkontakte/callback')
    // @UseGuards(AuthGuard('vkontakte'))
    // vkLogin(@Request() req) {
    //     return this.authService.otherLogin(req);
    // }

}
