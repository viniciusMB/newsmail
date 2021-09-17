import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

// interface iTokenPayload {
//   id: string
//   iat: number
//   exp: number
// }

export default function login (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers

  if (!authorization) {
    return res.sendStatus(401)
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const data = jwt.verify(token, process.env.JWT_KEY)

    console.log(data)
    // const { id } = data as iTokenPayload
    // req.author = id  ~ ou ~ req.readerId = id
    return next()
  } catch {
    return res.sendStatus(401)
  }
}
