require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.rabbitMq],
      queue: 'photo-queue',
      queueOptions: {
        durable: false
      },
    },
  });
  
  await app.listen();

}
bootstrap();
