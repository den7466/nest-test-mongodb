import { Injectable } from '@nestjs/common';
import { Mongoose } from 'mongoose';
import Film from './app.schema';

@Injectable()
export class FilmsMongoDbRepository {
  constructor(private connection: Mongoose) {}

  findAll() {
    return Film.find({});
  }
}
