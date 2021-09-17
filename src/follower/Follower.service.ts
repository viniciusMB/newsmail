import 'reflect-metadata'
import { FollowerEntity } from '../entity/Follower.entity'
import { getManager } from 'typeorm'

export class FollowerService {
    public register = async (followerId: number, authorId: number, readerEmail: string) => {
      const follower = FollowerEntity.create({ followerId, authorId, readerEmail })

      const newFollower = await getManager().save(follower)
      return newFollower
    }

    public index = async (authorId: number) => {
      const followerFound = await FollowerEntity.find({ select: ['readerEmail'], where: { authorId: authorId } })
      return followerFound
    }

    public delete = async (followerId: number) => {
      const followerDeleted = await FollowerEntity.delete({ followerId: followerId })
      return followerDeleted
    }
}
