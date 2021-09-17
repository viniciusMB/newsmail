import { Response } from 'express-serve-static-core'
import nodemailer from 'nodemailer'
import { FollowerEntity } from '../entity/Follower.entity'

export function SendMail (followersFounded : FollowerEntity[], resLocals: Response) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  let recipients : string[]
  followersFounded.map(follower => {
    recipients = [follower.readerEmail.toString()]
    return recipients
  })

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: recipients,
    subject: resLocals.locals.title,
    text: resLocals.locals.content
  }

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      return resLocals.status(500).send({ error: err })
    }
    const response = {
      message: 'All emails were sent sucessfully'
    }
    return resLocals.status(200).send({ response })
  })
}
