import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, BaseEntity } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('authors')
export class AuthorEntity extends BaseEntity {
     @PrimaryGeneratedColumn()
     authorId: number

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
