import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PaymentsModule } from './payments/payments.module';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from "./config/configuration"
import { ConfigModule, ConfigService } from '@nestjs/config';

const config = configuration();


@Module({
  imports: [
    UsersModule,
    PaymentsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const uri = config.get<string>('DB_URI');
        return {
          uri,
          retryAttempts: 3,
          useNewUrlParser: true,
          useUnifiedTopology: true
        }
      }
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [configuration]
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
