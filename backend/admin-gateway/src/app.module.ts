import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminController } from './admin/admin.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [
      ClientsModule.register([
    {
      name: 'MOVIE_SERVICE',
      transport: Transport.RMQ,
      options: {
        urls: ['amqps://qeejdkip:7GcdIflUWPSpvj5uk7D48jncu6vqoscW@hawk.rmq.cloudamqp.com/qeejdkip'],
        queue: 'admin-queue',
        queueOptions: {
          durable: false
        },
      },
    },
  ])],
  controllers: [AppController, AdminController],
  providers: [AppService],
})
export class AppModule {}
