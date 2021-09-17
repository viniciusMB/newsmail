import { Request, Response, Router } from 'express'
import { AuthorController } from './Author.controller'
import login from '../authentication/Authentication.login'

export const AuthorRouter = Router()

const authorController = new AuthorController()

AuthorRouter.post('/register', (req: Request, res: Response) => authorController.register(req, res))

AuthorRouter.get('/get', authorController.get)

AuthorRouter.patch('/delete', login, authorController.delete)

AuthorRouter.post('/share', login, authorController.postContent, authorController.shareContent)
