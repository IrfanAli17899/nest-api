import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import envs from './env.service';

class DatabaseService {
  private readonly config: TypeOrmModuleOptions = {
    type: 'postgres',
    host: envs.get('POSTGRES_HOST'),
    port: parseInt(envs.get('POSTGRES_PORT')),
    username: envs.get('POSTGRES_USER'),
    password: envs.get('POSTGRES_PASSWORD'),
    database: envs.get('POSTGRES_DATABASE'),
    entities: ['**/*.entity.js'],
    migrationsTableName: 'migrations',
    migrations: ['**/migrations/*.js'],
    cli: {
      migrationsDir: '**/migrations',
    },
    synchronize: !envs.isProduction(),
    ssl: envs.isProduction(),
  };
  get getConfig(): TypeOrmModuleOptions {
    return this.config;
  }
}

const dbService = new DatabaseService();
export default dbService;
