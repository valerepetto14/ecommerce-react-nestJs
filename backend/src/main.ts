import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita el CORS
  app.use(cookieParser()); // Habilita el uso de cookies
  app.useGlobalPipes(new ValidationPipe({ // Valida los datos que se envian al servidor
    whitelist: true, // Elimina los datos que no estan en el DTO
    forbidNonWhitelisted: true, // Devuelve un error si se envia un dato que no esta en el DTO
  }));
  await app.listen(3000);
}
bootstrap();
 