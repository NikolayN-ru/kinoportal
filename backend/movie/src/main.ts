import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import process from "process";

async function bootstrap() {
  const PORT = 3001;
  const app = await NestFactory.create(AppModule);

  await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
bootstrap();
