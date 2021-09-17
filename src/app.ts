import 'reflect-metadata'
import express from 'express'

import { ReaderRouter } from './reader/Reader.route'
import { AuthorRouter } from './author/Author.route'
import { AuthenticationRouter } from './authentication/Authentication.route'
import { ConnectDB } from './config/database/database.config'

const app = express()

app.use(express.json())
app.use('/reader', ReaderRouter)
app.use('/author', AuthorRouter)
app.use('/', AuthenticationRouter)

ConnectDB()

export { app }
