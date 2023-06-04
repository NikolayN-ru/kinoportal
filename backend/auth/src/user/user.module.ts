import { Module } from '@nestjs/common';
import {UserController} from "./user.controller";
import {User} from "./user.entity";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    controllers: [UserController],
    providers: [UserService],
    imports: [
        TypeOrmModule.forFeature([User]),
        ClientsModule.register([
            {
                name: 'MOVIE_SERVICE',
                transport: Transport.RMQ,
                options: {
                    urls: [process.env.rabbitMq],
                    queue: 'movie-queue',
                    queueOptions: {
                        durable: false
                    },
                },
            },
        ])
    ],
    exports:[
        UserService
    ]
})
export class UserModule {}
