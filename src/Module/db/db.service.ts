import {Injectable} from "@nestjs/common"
import {MongoRepository} from "typeorm"
import { InjectRepository } from '@nestjs/typeorm';
import DataView from '../../Entity/DataView';

@Injectable()
export default class DbService {
  constructor(
    @InjectRepository(DataView) public DataViewRepository: MongoRepository<DataView>

  ) {

  }

}