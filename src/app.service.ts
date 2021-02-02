import { Injectable, Inject } from '@nestjs/common';
import DbService from './Module/db/db.service';
import { InsertResult } from 'typeorm';

@Injectable()
export class AppService {

  constructor(private DbService: DbService) {
  }

  async getHello() {
    let bug = this.DbService.DataViewRepository.create();
    bug.name = '大数据'+Math.round(Math.random()*100);
    bug.data = {
      element: '10010',
    };


    const result = await this.DbService.DataViewRepository.save(bug);
    return result;
  }
}
