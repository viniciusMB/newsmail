import { Request, Response, NextFunction } from 'express'

import { AuthorService } from './Author.service'
import { ContentService } from '../content/Content.service'
import { FollowerService } from '../follower/Follower.service'
import { SendMail } from '../mail/Mail.controller'

export class AuthorController {
    private authorService: AuthorService
    private contentService: ContentService
    private followerService: FollowerService

    constructor () {
      this.authorService = new AuthorService()
      this.contentService = new ContentService()
      this.followerService = new FollowerService()
    }

  public register = async (req: Request, res: Response) => {
    const {
      body: { email, name, password }
    } = req

    const newReader = await this.authorService.register(name, email, password)
    res.json(newReader)
  }

  public get = async (req: Request, res: Response) => {
    const authorId = req.body.authorId
    const authorFound = await this.authorService.index(authorId)
    res.send(authorFound).json()
  }

  public delete = async (req: Request, res: Response) => {
    const authorId = req.body.authorId
    const authorDeleted = await this.authorService.delete(authorId)
    res.send(authorDeleted).json()
  }

  public postContent = async (req: Request, res: Response, next: NextFunction) => {
    const {
      body: { authorId, title, textContent, postId }
    } = req

    const newContent = await this.contentService.postContent(authorId, title, textContent, postId)
    res.json(newContent)
    res.locals.authorId = newContent.authorId
    res.locals.title = newContent.title
    res.locals.textContent = newContent.textContent
    next()
  }

  public shareContent = async (req: Request, res: Response) => {
    const authorId = res.locals.authorId
    const followersFound = await this.followerService.index(authorId)
    return SendMail(followersFound, res)
  }
}
