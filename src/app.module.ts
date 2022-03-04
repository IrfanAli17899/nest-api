import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import dbService from './config/db.service';

@Module({
  imports: [TypeOrmModule.forRoot(dbService.getConfig), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
