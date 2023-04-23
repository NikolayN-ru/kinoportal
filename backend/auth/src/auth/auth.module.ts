import { Module } from '@nestjs/common';
import {AuthController} from "./auth.controller";
import {AuthService} from "./auth.service";
import process from "process";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";
import {JwtModule} from "@nestjs/jwt";

@Module({
    controllers: [AuthController],
    providers: [AuthService],
    imports: [
        JwtModule.register({
            secret: 'SECRET',
            signOptions: {
                expiresIn: '24h'
            }
        }),
        TypeOrmModule.forFeature([User])
    ],
    exports: [
        AuthService,
        JwtModule
    ]
})

export class AuthModule {}
