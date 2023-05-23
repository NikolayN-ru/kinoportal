import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ActorFilmEntity } from './actor.film.entity';
import { ActorFilmService } from './actor.film.service';
import { ActorEntity } from '../actor/actor.entity';
import { RoleEntity } from '../roles/actor.film.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActorFilmEntity, ActorEntity, RoleEntity])
  ],
  controllers: [],
  providers: [ActorFilmService]
})
export class ActorFilmModule {}