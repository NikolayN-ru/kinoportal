import { Module } from '@nestjs/common';
import { ActorController } from './actor/actor.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { FilmController } from './film/film.controller';
import { AdminController } from './admin/admin.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth/auth.controller';
import { UserController } from './auth/user.controller';

@Module({
  imports: [
    JwtModule.register({
      secret: 'SECRET',
      signOptions: {
        expiresIn: '24h'
      }
    }),
    
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'../..','/files-sistem','image'),
      serveRoot: '/image',
    }),
    ClientsModule.register([
      {
        name: 'Actor',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.rabbitMq],
          queue: 'actor-queue',
          queueOptions: {
            durable: false
          },
        },      
      },
      {
        name: 'Movie',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.rabbitMq],
          queue: 'movie-queue',
          queueOptions: {
            durable: false
          }
        }
      },
      {
        name: 'Auth',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.rabbitMq],
          queue: 'auth-queue',
          queueOptions: {
            durable: false
          },
        },      
      }
    ])
  ],
  controllers: [ActorController,
    FilmController,
    AdminController,
    AuthController,
    UserController],
  providers: [],
})
export class AppModule {}
