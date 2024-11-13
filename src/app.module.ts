import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FilmsMongoDbRepository } from './app.service';
import { Mongoose } from 'mongoose';

const applicationConfig = process.env;

export class DatabaseConnection {
  private url: string;
  private driver: string;

  constructor (options: { url: string, driver: string }){
    this.url = options.url;
    this.driver = options.driver;
  }
}

const configProvider = {
  provide: 'CONFIG',
  useValue: applicationConfig,
};

const databaseProvider = {
  provide: 'DATABASE',
  useFactory: (config: typeof applicationConfig) => {
    const options = {
      url: config.DATABASE_URL || 'mongodb://localhost:27017/afisha',
      driver: config.DATABASE_DRIVER || 'mongodb',
    };

    return new DatabaseConnection(options);
  },
  inject: [{ token: 'CONFIG' }],
};

@Module({
  imports: [],
  controllers: [AppController],
  providers: [databaseProvider, configProvider, FilmsMongoDbRepository, Mongoose],
})
export class AppModule {}
