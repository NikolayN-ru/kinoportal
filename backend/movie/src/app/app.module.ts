import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { MovieModule } from '../movie/movie.module';
import {Movie} from "../movie/entity/movie.entity";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Review} from "../movie/entity/review.entity";
import {Comment} from "../movie/entity/comment.entity";
import {Country} from "../country/entity/country.entity";
import {Genre} from "../genre/entity/genre.entity";
import {CountryModule} from "../country/country.module";
import {GenreModule} from "../genre/genre.module";
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      // type: 'cockroachdb',
      // url: 'postgresql://syst1337_gmail_com:KHnUBisY6kmPtbuVJhpxWA@oilier-toad-7177.7tc.cockroachlabs.cloud:26257/movie?sslmode=verify-full',
      host: process.env.dbhost,
      port: 5432,
      username: process.env.dbusername,
      password: process.env.password,
      database: process.env.database,
      entities: [Movie, Review, Comment, Country, Genre],
      synchronize: true,
      // ssl: true
    }),
    MovieModule,
    CountryModule,
      GenreModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
