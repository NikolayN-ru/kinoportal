import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./user/user.entity";
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import {Role} from "./auth/roles.entity";

@Module({
  imports: [
      TypeOrmModule.forRoot({
        //type: "postgres",
        type: 'cockroachdb',
        url: 'postgresql://syst1337_gmail_com:KHnUBisY6kmPtbuVJhpxWA@oilier-toad-7177.7tc.cockroachlabs.cloud:26257/auth?sslmode=verify-full',
        // host: 'localhost',
        // port: 5432,
        // username: 'postgres',
        // password: '12345678',
        // database: 'auth',
        entities: [User, Role],
        synchronize: true,
        ssl: true
    }),
      AuthModule,
      UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
