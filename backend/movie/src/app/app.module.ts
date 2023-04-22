import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { MovieModule } from '../movie/movie.module';
import {Movie} from "../movie/entity/movie.entity";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Review} from "../movie/entity/review.entity";
import {Comment} from "../movie/entity/comment.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345678',
      database: 'movie',
      entities: [Movie, Review, Comment],
      synchronize: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
