import { Module } from '@nestjs/common';
import { AppController } from './controller';
import { AppService } from '../main/service';
import { ConfigModule } from '../config';
import { DatabaseModule } from './modules';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { UserModule } from '../domain/user/user.module';
import { HttpExceptionFilter, LoggingInterceptor, ErrorInterceptor } from '../common';
import {APP_FILTER, APP_INTERCEPTOR} from '@nestjs/core';
import { EpicModule } from '../domain/epic/epic.module';

const providers = [
  {
    provide: APP_FILTER,
    useClass: HttpExceptionFilter,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: LoggingInterceptor,
  },
  {
    provide: APP_INTERCEPTOR,
    useClass: ErrorInterceptor,
  },
];

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    EpicModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    ...providers,
  ],
})
export class AppModule {}
