import 'reflect-metadata'
import http from 'http'
import { app } from './app'

import { ConnectDB } from './config/database/database.config'

ConnectDB()

const port = process.env.PORT || 3000
const server = http.createServer(app)

server.listen(port)
