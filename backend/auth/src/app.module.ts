import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {Role} from "./auth/roles.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.dbhost,
        port: 5432,
        username: process.env.dbusername,
        password: process.env.password,
        database: process.env.database,
        entities: [User, Role],
        synchronize: true,
        //ssl: true
    }),
      AuthModule,
      UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
