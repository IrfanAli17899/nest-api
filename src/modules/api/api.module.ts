import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TodosModule,
    RouterModule.register([
      {
        path: 'api',
        module: ApiModule,
        children: [
          {
            path: 'v1',
            children: [{ path: 'todos', module: TodosModule }],
          },
        ],
      },
    ]),
  ],
})
export class ApiModule {}
