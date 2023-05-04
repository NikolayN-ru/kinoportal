import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActorEntity } from './entity/actor/actor.entity';
import { ActorModule } from './entity/actor/actor.module';
import { ActorFilmEntity } from './entity/actor-film/actor.film.entity';
import { ActorFilmModule } from './entity/actor-film/actor.film.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
    host: 'postgresActor',
    port: 5432,
    username: 'postgres',
    password: 'qwerty',
    database: 'actor',
    entities: [ActorEntity,ActorFilmEntity],
    synchronize: true, 
  }),
  ActorModule,
  ActorFilmModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
