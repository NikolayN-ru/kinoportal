import { Module } from '@nestjs/common';
import { ActorController } from './actor/actor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FilmController } from './film/film.controller';
import { AdminController } from './admin/admin.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'Actor',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'actor-queue',
          queueOptions: {
            durable: false
          },
        },      
      },
      {
        name: 'Movie',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'movie-queue',
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [ActorController,
    FilmController,
    AdminController],
  providers: [],
})
export class AppModule {}
