import { Module} from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {JwtModule} from "@nestjs/jwt";
import {GoogleStrategy} from "./google.strategy";
import {VkontakteStrategy} from './vkontakte/vkontakte.strategy';
import {JwtStrategy} from "./jwt.strategy";
import {Role} from "./roles.entity";

@Module({
    controllers: [AuthController],
    exports: [
        AuthService,
        JwtModule
    ],
    imports: [
        JwtModule.register({
                secret: 'SECRET',
                signOptions: {
                    expiresIn: '24h'
                }
            }),
        TypeOrmModule.forFeature([User, Role]),
    ],
    providers: [
        AuthService,
        GoogleStrategy,
        JwtStrategy,
        VkontakteStrategy
    ]
})

export class AuthModule {}
