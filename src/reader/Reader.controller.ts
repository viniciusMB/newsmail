import { Request, Response } from 'express'

import { ReaderService } from './Reader.service'
import { FollowerService } from '../follower/Follower.service'

export class ReaderController {
    private readerService: ReaderService
    private followerService: FollowerService

    constructor () {
      this.readerService = new ReaderService()
      this.followerService = new FollowerService()
    }

  public register = async (req: Request, res: Response) => {
    const {
      body: { email, name, password }
    } = req

    const newReader = await this.readerService.register(name, email, password)
    res.json(newReader)
  }

  public get = async (req: Request, res: Response) => {
    const readerId = req.body.readerId
    const readerFound = await this.readerService.index(readerId)
    res.send(readerFound).json()
  }

  public delete = async (req: Request, res: Response) => {
    const readerId = req.body.readerId
    const readerDeleted = await this.readerService.delete(readerId)
    res.send(readerDeleted).json()
  }

  public follow = async (req: Request, res: Response) => {
    const {
      body: { readerEmail, authorId, followerId }
    } = req

    const newFollower = await this.followerService.register(followerId, readerEmail, authorId)
    res.json(newFollower)
  }

  public unfollow = async (req: Request, res: Response) => {
    const followerId = req.body.followerId
    const followerDeleted = await this.followerService.delete(followerId)
    res.send(followerDeleted).json()
  }
}
