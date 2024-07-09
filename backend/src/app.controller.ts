import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMeals(){
    return this.appService.getMeals();
  }

  @Get('labels')
  getLabels(){
    return this.appService.getLabels();
  }
}
