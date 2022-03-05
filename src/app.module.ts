import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import dbService from './config/db.service';
import { JoiPipeModule } from 'nestjs-joi';
import { RouterModule } from '@nestjs/core';
import { ApiModule } from './modules/api/api.module';
import { TodosModule } from './modules/api/todos/todos.module';
import { WebhooksModule } from './modules/webhooks/webhooks.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dbService.getConfig),
    JoiPipeModule,
    ApiModule,
    WebhooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
