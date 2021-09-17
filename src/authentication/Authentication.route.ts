import { Router } from 'express'
import { AuthenticationController } from './Authentication.controller'

export const AuthenticationRouter = Router()

const authenticationController = new AuthenticationController()

AuthenticationRouter.post('/auth/reader', authenticationController.ReaderAuthenticate)

AuthenticationRouter.post('/auth/author', authenticationController.AuthorAuthenticate)
