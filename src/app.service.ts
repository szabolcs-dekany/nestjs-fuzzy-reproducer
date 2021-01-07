import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat, CatDocument } from './cat.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Cat.name) private catModel: Model<CatDocument>,
) {}
  getHello(): string {
    return 'Hello World!';
  }

  async createRandomCatWithFuzzyFields(): Promise<Cat> {
    const name = 'ThisIsTheCatsaName'
    const catEntity = new this.catModel({name: name})
    return catEntity.save()
  }

  async findCatByNameFuzzy(name: string): Promise<Cat>{
    /**
     * This method on the injected model this not exits
     * 
    */
    //this.catModel.fuzzySearch('this')
    return this.catModel.findOne().exec()
  }
}
