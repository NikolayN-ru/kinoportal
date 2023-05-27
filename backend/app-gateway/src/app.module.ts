import { Module } from '@nestjs/common';
import { ActorController } from './actor/actor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FilmController } from './film/film.controller';
import { AdminController } from './admin/admin.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'../..','/files-sistem','image'),
      serveRoot: '/image',
    }),
    ClientsModule.register([
      {
        name: 'Actor',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbitmq:5672'],
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
          urls: ['amqp://rabbitmq:5672'],
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
