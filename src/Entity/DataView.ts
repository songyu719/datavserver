import { Entity,ObjectIdColumn,Column,CreateDateColumn,UpdateDateColumn} from 'typeorm'

@Entity()
class DataView {
  @ObjectIdColumn()
  id:string

  @Column()
  name:string

  @Column()
  data:any

  @CreateDateColumn()
  craeteAt:Date

  @UpdateDateColumn()
  updateAt:Date

}

export default DataView