import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './cat.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('create-cat')
  getCat(): Promise<Cat> {
    return this.appService.createRandomCatWithFuzzyFields()
  }
}
