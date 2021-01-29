import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataviewModule } from './dataview/dataview.module';

@Module({
  imports: [DataviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
