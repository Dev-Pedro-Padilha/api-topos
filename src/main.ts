import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    
    // Habilitar validação global
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    
    // Habilitar CORS
    app.enableCors({
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
    });
    
    // Configuração do Swagger
    const config = new DocumentBuilder()
        .setTitle('API Topos Criativos')
        .setDescription('Sistema de gerenciamento para produtos criativos personalizados')
        .setVersion('1.0')
        .addBearerAuth(
            {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
                name: 'JWT',
                description: 'Enter JWT token',
                in: 'header',
            },
            'JWT-auth',
        )
        .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    app.enableShutdownHooks();

    const port = Number(process.env.PORT) || 3000;
    const host = process.env.HOST || 'localhost';

    const shutdown = async () => {
        try{
            await app.close();
        } finally{
            process.exit(0);
        }
    };
    process.on('SIGINT', shutdown);
    process.on('SIGTERM', shutdown);
    
    await app.listen(port, host);
}
bootstrap();
