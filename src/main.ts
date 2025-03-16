import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors(); // Habilita CORS
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
