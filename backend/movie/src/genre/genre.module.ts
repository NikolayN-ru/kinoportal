import { Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Genre} from "./entity/genre.entity";

@Module({
  controllers: [GenreController],
  providers: [GenreService],
  imports: [
    TypeOrmModule.forFeature([Genre]),

  ],
  exports:[
    GenreService
  ]
})
export class GenreModule {}
