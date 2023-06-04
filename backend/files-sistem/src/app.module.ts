import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilesEntity } from './entity/files/files.entity';
import { PhotoModule } from './entity/files/files.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ 
    type: 'postgres',
    host: process.env.dbhost,
    port: 5432,
    username: process.env.dbusername,
    password: process.env.password,
    database: process.env.database,
    entities: [FilesEntity],
    synchronize: true, 
    }),
    PhotoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
