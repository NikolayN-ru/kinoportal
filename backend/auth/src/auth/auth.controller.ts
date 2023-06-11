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

    @MessagePattern('VKLogin')
    vkLogin(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.authService.otherLogin(data);
    }

    @MessagePattern('googleLogin')
    googleLogin(@Payload() data: any, @Ctx() context: RmqContext) {  
        return this.authService.otherLogin(data);
    }
}
