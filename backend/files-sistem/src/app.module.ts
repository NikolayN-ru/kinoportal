import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesEntity } from './entity/files/files.entity';
import { PhotoModule } from './entity/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'qwerty',
    database: 'files',
    entities: [FilesEntity],
    synchronize: true, 
    }),
    PhotoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
