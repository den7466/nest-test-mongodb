import { Controller, Get } from '@nestjs/common';
import { FilmsMongoDbRepository } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly filmsMongoDbRepository: FilmsMongoDbRepository,
  ) {}

  @Get()
  getFilms(): any {
    return this.filmsMongoDbRepository.findAll();
  }
}
