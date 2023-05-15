import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './entity/actor/actor.entity';
import { ActorFilmEntity } from './entity/actor-film/actor.film.entity';
import { ActorModule } from './entity/actor/actor.module';
import { ActorFilmModule } from './entity/actor-film/actor.film.module';
import { RoleEntity } from './entity/roles/actor.film.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwerty',
    database: 'actor',
    entities: [ActorEntity,ActorFilmEntity,RoleEntity],
    synchronize: true, 
  }),
  ActorModule,
  ActorFilmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
