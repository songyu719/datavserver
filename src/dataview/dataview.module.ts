import { Module } from '@nestjs/common';
import { DataviewController } from './dataview/dataview.controller';

@Module({
  controllers: [DataviewController]
})
export class DataviewModule {}
