import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const method_name = 'bootstrap';
  try {
    const app = await NestFactory.create(AppModule);

    app.connectMicroservice({
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 4000,
      },
    });

    await app.startAllMicroservices();
    await app.listen(3000);
    Logger.log(
      `${method_name} Application is running on: ${await app.getUrl()}`,
    );
  } catch (error) {
    Logger.error(`${method_name} Error: ${error} `, method_name);
  }
}

bootstrap();
