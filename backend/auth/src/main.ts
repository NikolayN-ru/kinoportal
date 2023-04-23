import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
  const PORT = process.env.PORT || 3000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
      .setTitle('Авторизация')
      .setDescription('Документация')
      .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/auth/docs', app, document);

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

bootstrap();
