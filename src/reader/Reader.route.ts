import { Router, Request, Response } from 'express'
import { ReaderController } from './Reader.controller'
import login from '../authentication/Authentication.login'

export const ReaderRouter = Router()

const readerController = new ReaderController()

ReaderRouter.post('/register', (req: Request, res: Response) => readerController.register(req, res))

ReaderRouter.get('/get', readerController.get)

ReaderRouter.post('/follow', login, readerController.follow)

ReaderRouter.patch('/unfollow', login, readerController.unfollow)

ReaderRouter.patch('/delete', login, readerController.delete)
