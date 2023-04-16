import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesService } from './files.service';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService, FilesService],
  controllers: [PhotoController]
})
export class PhotoModule {}
