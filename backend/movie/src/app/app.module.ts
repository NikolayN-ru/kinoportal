import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { MovieModule } from '../movie/movie.module';
import {Movie} from "../movie/entity/movie.entity";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Review} from "../movie/entity/review.entity";
import {Comment} from "../movie/entity/comment.entity";
import {Genre} from "../genre/entity/genre.entity";
import {Country} from "../country/entity/country.entity";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgresMovie',
      port: 5432,
      username: 'postgres',
      password: 'qwerty',
      database: 'movie',
      entities: [Movie, Review, Comment, Country, Genre],
      synchronize: true,
    }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
