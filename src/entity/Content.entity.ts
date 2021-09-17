import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('content')
export class ContentEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  postId: number

  @Column()
    authorId: number

  @Column()
  title: string

  @Column('text')
  textContent
}
