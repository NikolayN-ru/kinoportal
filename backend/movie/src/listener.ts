import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import {Transport} from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://qeejdkip:7GcdIflUWPSpvj5uk7D48jncu6vqoscW@hawk.rmq.cloudamqp.com/qeejdkip'],
      queue: 'admin-queue',
      queueOptions: {
        durable: false
      }
    }
  }); // для комментов

  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: ['amqp://rabbitmq:5672'],
  //     queue: 'admin-queue',
  //     queueOptions: {
  //       durable: false
  //     }
  //   }
  // });

  await app.listen();
}
bootstrap();
