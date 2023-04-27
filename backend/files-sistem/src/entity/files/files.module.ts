import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirFilesService } from '../dir-files.service';
import { FilesEntity } from './files.entity';
import { FilesService } from './files.service';
import { PhotoController } from './files.controller';

@Module({
  imports:[TypeOrmModule.forFeature([FilesEntity])],
  providers: [FilesService, DirFilesService],
  controllers: [PhotoController]
})
export class PhotoModule {}
