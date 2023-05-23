import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://rabbitmq:5672'],
      queue: 'movie-queue',
      queueOptions: {
        durable: false
      }
    }
  });

  await app.listen();
}
bootstrap();
