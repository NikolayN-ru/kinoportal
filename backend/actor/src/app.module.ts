import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Actor } from './entity/actor.entity';
import { ActorModule } from './entity/actor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwerty',
    database: 'kinoportal',
    entities: [Actor],
    synchronize: true, 
  }),
  ActorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
