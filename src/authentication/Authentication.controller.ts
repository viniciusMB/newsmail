import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { AuthorService } from '../author/Author.service'
import { ReaderService } from '../reader/Reader.service'

export class AuthenticationController {
    private authorService: AuthorService
    private readerService: ReaderService

    constructor () {
      this.authorService = new AuthorService()
      this.readerService = new ReaderService()
    }

  public AuthorAuthenticate = async (req: Request, res: Response) => {
    const { password, authorId } = req.body

    // const authorId = req.body.authorId
    const authorFound = await this.authorService.index(authorId)

    if (!authorFound) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, authorFound.password)

    if (!isValidPassword) {
      return res.sendStatus
    }

    const token = jwt.sign({ id: authorFound.authorId }, process.env.JWT_KEY, { expiresIn: '1d' })

    delete authorFound.password

    return res.json({ authorFound, token })
  }

  public ReaderAuthenticate = async (req: Request, res: Response) => {
    const { password, readerId } = req.body

    // const readerId = req.body.readerId
    const readerFound = await this.readerService.index(readerId)

    if (!readerFound) {
      return res.sendStatus(401)
    }

    const isValidPassword = await bcrypt.compare(password, readerFound.password)

    if (!isValidPassword) {
      return res.sendStatus
    }

    const token = jwt.sign({ id: readerFound.readerId }, process.env.JWT_KEY, { expiresIn: '1d' })

    delete readerFound.password

    return res.json({ readerFound, token })
  }
}
