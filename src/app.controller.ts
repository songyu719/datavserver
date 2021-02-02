import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import DataView from './Entity/DataView';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}



  @Get()
  async  getHello() {



    return {
      success:true,
      content:await this.appService.getHello()
    }
  }
}
