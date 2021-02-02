import {  Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DbModule  from './module/db/db.module';
import { GraphQLModule } from "@nestjs/graphql"
import { DataViewResolver } from './graphql/data-view/data-view.resolver';
@Module({
  imports: [
    DbModule.register(),
    GraphQLModule.forRoot({
      autoSchemaFile:"./schema.gql",
      debug:true,
      playground:true
    })
  ],
  controllers: [AppController],
  providers: [AppService, DataViewResolver],
})
export class AppModule {

}
