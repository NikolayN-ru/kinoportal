import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: "postgres",
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: '12345678',
        database: 'auth',
        entities: [User],
        synchronize: true,
    }),
      AuthModule,
      UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
