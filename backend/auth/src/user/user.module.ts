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
                    urls: ['amqps://qeejdkip:7GcdIflUWPSpvj5uk7D48jncu6vqoscW@hawk.rmq.cloudamqp.com/qeejdkip'],
                    queue: 'queue',
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
