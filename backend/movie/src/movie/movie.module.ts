import { Module } from '@nestjs/common';
import {MovieController} from "./movie.controller";
import {MovieService} from "./movie.service";
import {Movie} from "./entity/movie.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Review} from "./entity/review.entity";
import {Comment} from "./entity/comment.entity";
import {Genre} from "./entity/genre.entity";
import {Country} from "./entity/country.entity";
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
    controllers: [MovieController],
    providers: [MovieService],
    imports: [
        TypeOrmModule.forFeature([Movie, Review, Comment, Genre, Country]),
        ClientsModule.register([
            {
              name: 'Photo',
              transport: Transport.RMQ,
              options: {
                urls: ['amqp://rabbitmq:5672'],
                queue: 'photo-queue',
                queueOptions: {
                  durable: false
                },
              },
            },
        ])
    ],
    exports:[
        MovieService
    ]
})
export class MovieModule {}
