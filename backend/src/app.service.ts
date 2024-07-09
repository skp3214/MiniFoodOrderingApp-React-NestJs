import { Injectable } from '@nestjs/common';
import { meals,labels } from './data';
@Injectable()
export class AppService {
  getMeals(){
    return meals;
  }
  getLabels(){
    return labels;
  }
}
