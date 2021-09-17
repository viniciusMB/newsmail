import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('followers')
export class FollowerEntity extends BaseEntity {
    @PrimaryGeneratedColumn()
    followerId: number

    @Column()
    authorId: number

    @Column()
    readerEmail: string
}
