import 'reflect-metadata'
import { ReaderEntity } from '../entity/Reader.entity'
import { getManager } from 'typeorm'
import { FollowerEntity } from '../entity/Follower.entity'

export class ReaderService {
    public register = async (name, email, password) => {
      const reader = ReaderEntity.create({ name, email, password })

      const newReader = await getManager().save(reader)
      return newReader
    }

    public index = async (readerId: number) => {
      const readerFound = await getManager().findOne(ReaderEntity, readerId)
      return readerFound
    }

    public delete = async (readerId: number) => {
      const readerDeleted = await ReaderEntity.delete({ readerId: readerId })
      return readerDeleted
    }

    public followAuthor = async (follower: FollowerEntity) => {
      const newFollower = await getManager().save(follower)
      return newFollower
    }
}
