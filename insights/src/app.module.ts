import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'INSIGHTS-PRODUCER',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'INSIGHTS',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'insights-service',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
