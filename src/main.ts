import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,  // remove undeclare field from the dto
    transform: true, // auto tranfrom type 
    forbidNonWhitelisted: true // if there are extra field , return a 400 error
  }))
  await app.listen(process.env.PORT ?? 3333);
}
bootstrap();

