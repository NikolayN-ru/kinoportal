import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorService } from './actor.service';
import { ActorEntity } from './actor.entity';
import { ActorController } from './actor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ActorFilmService } from '../actor-film/actor.film.service';
import { ActorFilmModule } from '../actor-film/actor.film.module';
import { ActorFilmEntity } from '../actor-film/actor.film.entity';
import { RoleEntity } from '../roles/actor.film.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorEntity, ActorFilmEntity, RoleEntity]),
    ClientsModule.register([
      {
        name: 'Photo',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.rabbitMq],
          queue: 'photo-queue',
          queueOptions: {
            durable: false
          },
        },
      },
      {
        name: 'Movie',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.rabbitMq],
          queue: 'movie-queue',
          queueOptions: {
            durable: false
          }
        }
      }
    ]),
    ActorFilmModule
  ],
  controllers: [ActorController],
  providers: [ActorService,ActorFilmService]
})
export class ActorModule {}