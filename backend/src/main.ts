import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    //cors
    app.enableCors({
        origin: 'http://localhost:5173', // Habilita el CORS
        credentials: true, // Habilita el uso de cookies
    }); // Habilita el CORS

    app.use(cookieParser()); // Habilita el uso de cookies

    app.useGlobalPipes(
        new ValidationPipe({
            // Valida los datos que se envian al servidor
            whitelist: true, // Elimina los datos que no estan en el DTO
            forbidNonWhitelisted: true, // Devuelve un error si se envia un dato que no esta en el DTO
        }),
    );

    //swagger documentation
    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
