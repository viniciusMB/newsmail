import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, BaseEntity } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('readers')
export class ReaderEntity extends BaseEntity {
     @PrimaryGeneratedColumn()
     readerId: number

     @Column()
     email: string

     @Column()
     name: string

     @Column()
     password: string

     @BeforeInsert()
     @BeforeUpdate()
     hashPassword () {
       this.password = bcrypt.hashSync(this.password, 8)
     }
}
